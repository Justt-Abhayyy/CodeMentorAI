package com.codementor.backend.controller;

import com.codementor.backend.dto.AIReviewRequest;
import com.codementor.backend.dto.AIReviewResponse;
import com.codementor.backend.service.AIReviewService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai")
public class AIReviewController {

    private final AIReviewService aiReviewService;

    public AIReviewController(
            AIReviewService aiReviewService) {

        this.aiReviewService = aiReviewService;
    }

    @PostMapping("/review")
    public AIReviewResponse reviewCode(
            @RequestBody AIReviewRequest request) {

        return aiReviewService.reviewCode(
                request.getCode()
        );
    }
}