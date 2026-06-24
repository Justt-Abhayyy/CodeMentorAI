package com.codementor.backend.service;

import com.codementor.backend.dto.DashboardResponse;
import com.codementor.backend.entity.Submission;
import com.codementor.backend.entity.User;
import com.codementor.backend.repository.ProblemRepository;
import com.codementor.backend.repository.SubmissionRepository;
import com.codementor.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DashboardService {

    private final ProblemRepository problemRepository;
    private final SubmissionRepository submissionRepository;
    private final UserRepository userRepository;

    public DashboardService(
            ProblemRepository problemRepository,
            SubmissionRepository submissionRepository,
            UserRepository userRepository) {

        this.problemRepository = problemRepository;
        this.submissionRepository = submissionRepository;
        this.userRepository = userRepository;
    }

    public DashboardResponse getDashboardData(
            String email) {

        User user =
                userRepository.findByEmail(email);

        List<Submission> submissions =
                submissionRepository.findByUser(user);

        long solvedProblems =
                submissions.stream()
                        .filter(s ->
                                "SOLVED".equals(
                                        s.getStatus()
                                )
                        )
                        .count();

        long totalProblems =
                problemRepository.count();

        long totalSubmissions =
                submissions.size();

        int rank = 1;

        return new DashboardResponse(
                totalProblems,
                totalSubmissions,
                solvedProblems,
                rank
        );
    }
}