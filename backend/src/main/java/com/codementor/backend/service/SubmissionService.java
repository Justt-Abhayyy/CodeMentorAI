package com.codementor.backend.service;

import com.codementor.backend.entity.Problem;
import com.codementor.backend.entity.Submission;
import com.codementor.backend.entity.User;
import com.codementor.backend.repository.ProblemRepository;
import com.codementor.backend.repository.SubmissionRepository;
import com.codementor.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class SubmissionService {

    private final SubmissionRepository submissionRepository;
    private final UserRepository userRepository;
    private final ProblemRepository problemRepository;

    public SubmissionService(
            SubmissionRepository submissionRepository,
            UserRepository userRepository,
            ProblemRepository problemRepository) {

        this.submissionRepository = submissionRepository;
        this.userRepository = userRepository;
        this.problemRepository = problemRepository;
    }

    public Submission createSubmission(
            String email,
            Long problemId,
            Submission submission) {

        User user =
                userRepository.findByEmail(email);

        Problem problem =
        problemRepository.findById(problemId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Problem not found"
                        ));

        submission.setUser(user);
        submission.setProblem(problem);
        submission.setSubmittedAt(LocalDateTime.now());

        if (submission.getStatus() == null ||
                submission.getStatus().isBlank()) {

            submission.setStatus("PENDING");
        }

        return submissionRepository.save(submission);
    }

    public List<Submission> getAllSubmissions() {

        return submissionRepository.findAll();
    }

    public Submission getSubmissionById(
            Long id) {

        return submissionRepository.findById(id)
                .orElse(null);
    }

    public List<Submission> getUserSubmissions(
            String email) {

        User user =
                userRepository.findByEmail(email);

        return submissionRepository.findByUser(user);
    }
}