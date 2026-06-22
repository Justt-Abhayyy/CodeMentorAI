package com.codementor.backend.service;

import com.codementor.backend.dto.RecommendationResponse;
import com.codementor.backend.entity.Problem;
import com.codementor.backend.entity.Submission;
import com.codementor.backend.entity.Tag;
import com.codementor.backend.entity.User;
import com.codementor.backend.repository.ProblemRepository;
import com.codementor.backend.repository.SubmissionRepository;
import com.codementor.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecommendationService {

    private final UserRepository userRepository;
    private final SubmissionRepository submissionRepository;
    private final ProblemRepository problemRepository;

    public RecommendationService(
            UserRepository userRepository,
            SubmissionRepository submissionRepository,
            ProblemRepository problemRepository) {

        this.userRepository = userRepository;
        this.submissionRepository = submissionRepository;
        this.problemRepository = problemRepository;
    }

    public List<RecommendationResponse> getRecommendations(
            String email) {

        User user =
                userRepository.findByEmail(email);

        List<Submission> submissions =
                submissionRepository.findByUser(user);

        if (submissions.isEmpty()) {

            return getDefaultRecommendations();
        }

        Tag preferredTag =
                submissions.get(
                        submissions.size() - 1
                ).getProblem().getTag();

        List<Problem> problems =
                problemRepository.findByTag(
                        preferredTag
                );

        List<RecommendationResponse> recommendations =
                new ArrayList<>();

        for (Problem problem : problems) {

            recommendations.add(
                    new RecommendationResponse(
                            problem.getTitle(),
                            problem.getDifficulty().name(),
                            problem.getTag().name()
                    )
            );
        }

        return recommendations;
    }

    private List<RecommendationResponse>
    getDefaultRecommendations() {

        List<RecommendationResponse> recommendations =
                new ArrayList<>();

        recommendations.add(
                new RecommendationResponse(
                        "Two Sum",
                        "EASY",
                        "ARRAYS"
                )
        );

        recommendations.add(
                new RecommendationResponse(
                        "Valid Parentheses",
                        "EASY",
                        "STRINGS"
                )
        );

        return recommendations;
    }
}