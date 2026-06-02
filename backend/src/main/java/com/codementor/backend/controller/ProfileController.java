package com.codementor.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class ProfileController {

    @GetMapping("/api/profile")
    public Map<String, String> getProfile() {

        return Map.of(
                "message",
                "Protected endpoint accessed successfully"
        );
    }
}