package com.codementor.backend.service;

import com.codementor.backend.dto.AIReviewResponse;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AIReviewService {

    public AIReviewResponse reviewCode(String code) {

        String timeComplexity = "Unknown";
        String spaceComplexity = "O(1)";

        List<String> suggestions = new ArrayList<>();

        if (code == null || code.isBlank()) {

            suggestions.add("Code cannot be empty");

            return new AIReviewResponse(
                    "Unknown",
                    "Unknown",
                    suggestions
            );
        }

        if (code.contains("for") && code.contains("for")) {

            timeComplexity = "O(n²)";
            suggestions.add(
                    "Nested loops detected. Consider optimization."
            );

        } else if (code.contains("for") ||
                code.contains("while")) {

            timeComplexity = "O(n)";
            suggestions.add(
                    "Linear iteration detected."
            );
        }

        if (code.contains("HashMap")) {

            suggestions.add(
                    "Good use of HashMap for faster lookup."
            );
        }

        if (code.length() < 50) {

            suggestions.add(
                    "Consider adding comments and edge case handling."
            );
        }

        return new AIReviewResponse(
                timeComplexity,
                spaceComplexity,
                suggestions
        );
    }
}