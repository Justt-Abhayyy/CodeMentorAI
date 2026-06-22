package com.codementor.backend.controller;

import com.codementor.backend.dto.LeaderboardResponse;
import com.codementor.backend.service.LeaderboardService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/leaderboard")
public class LeaderboardController {

    private final LeaderboardService leaderboardService;

    public LeaderboardController(
            LeaderboardService leaderboardService) {

        this.leaderboardService =
                leaderboardService;
    }

    @GetMapping
    public List<LeaderboardResponse>
    getLeaderboard() {

        return leaderboardService
                .getLeaderboard();
    }
}