package com.codementor.backend.controller;

import com.codementor.backend.dto.AIRequest;
import com.codementor.backend.dto.AIResponse;
import com.codementor.backend.service.AIService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai")
public class AIController {

    private final AIService aiService;

    public AIController(AIService aiService) {

        this.aiService = aiService;

    }

    @PostMapping("/review")
    public AIResponse reviewCode(
            @RequestBody AIRequest request) {

        String response =
                aiService.reviewCode(request);

        return new AIResponse(response);

    }

}