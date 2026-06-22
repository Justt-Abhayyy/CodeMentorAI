package com.codementor.backend.service;

import com.codementor.backend.dto.AIReviewResponse;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AIReviewService {

    public AIReviewResponse reviewCode(
            String code,
            String language) {

        String timeComplexity = "Unknown";
        String spaceComplexity = "O(1)";
        String codeQuality = "Average";

        List<String> suggestions = new ArrayList<>();

        if (code == null || code.isBlank()) {

            suggestions.add(
                    "Code cannot be empty"
            );

            return new AIReviewResponse(
                    "Unknown",
                    "Unknown",
                    "Poor",
                    suggestions
            );
        }

        int loopCount = 0;

        loopCount += countOccurrences(code, "for");
        loopCount += countOccurrences(code, "while");

        if (loopCount >= 2) {

            timeComplexity = "O(n²)";

            suggestions.add(
                    "Nested iteration detected."
            );

        } else if (loopCount == 1) {

            timeComplexity = "O(n)";

            suggestions.add(
                    "Linear iteration detected."
            );
        }

        if (code.contains("HashMap")) {

            suggestions.add(
                    "Good use of HashMap for optimization."
            );

            codeQuality = "Good";
        }

        if (code.contains("ArrayList")) {

            suggestions.add(
                    "ArrayList usage detected."
            );
        }

        if (code.length() < 50) {

            suggestions.add(
                    "Add comments and edge case handling."
            );

            codeQuality = "Average";
        }

        if (code.length() > 200) {

            codeQuality = "Good";
        }

        return new AIReviewResponse(
                timeComplexity,
                spaceComplexity,
                codeQuality,
                suggestions
        );
    }

    private int countOccurrences(
            String text,
            String keyword) {

        int count = 0;
        int index = 0;

        while ((index =
                text.indexOf(keyword, index)) != -1) {

            count++;
            index += keyword.length();
        }

        return count;
    }
}