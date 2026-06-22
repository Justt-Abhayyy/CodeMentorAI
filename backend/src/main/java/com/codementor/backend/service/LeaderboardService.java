package com.codementor.backend.service;

import com.codementor.backend.dto.LeaderboardResponse;
import com.codementor.backend.entity.Submission;
import com.codementor.backend.entity.User;
import com.codementor.backend.repository.SubmissionRepository;
import com.codementor.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class LeaderboardService {

    private final UserRepository userRepository;
    private final SubmissionRepository submissionRepository;

    public LeaderboardService(
            UserRepository userRepository,
            SubmissionRepository submissionRepository) {

        this.userRepository = userRepository;
        this.submissionRepository = submissionRepository;
    }

    public List<LeaderboardResponse> getLeaderboard() {

        List<User> users =
                userRepository.findAll();

        List<LeaderboardResponse> leaderboard =
                new ArrayList<>();

        for (User user : users) {

            List<Submission> submissions =
                    submissionRepository.findByUser(user);

            leaderboard.add(
                    new LeaderboardResponse(
                            0,
                            user.getName(),
                            submissions.size()
                    )
            );
        }

        leaderboard.sort(
                (a, b) -> Long.compare(
                        b.getSubmissions(),
                        a.getSubmissions()
                )
        );

        for (int i = 0;
             i < leaderboard.size();
             i++) {

            leaderboard.get(i)
                    .setRank(i + 1);
        }

        return leaderboard;
    }
}