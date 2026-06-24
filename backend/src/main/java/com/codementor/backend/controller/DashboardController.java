package com.codementor.backend.controller;

import com.codementor.backend.dto.DashboardResponse;
import com.codementor.backend.service.DashboardService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final DashboardService dashboardService;

    public DashboardController(
            DashboardService dashboardService) {

        this.dashboardService =
                dashboardService;
    }

    @GetMapping
    public DashboardResponse getDashboardData(
            Authentication authentication) {

        String email =
                authentication.getName();

        return dashboardService
                .getDashboardData(email);
    }
}