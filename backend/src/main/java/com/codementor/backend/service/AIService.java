package com.codementor.backend.service;

import com.codementor.backend.dto.AIRequest;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;

@Service
public class AIService {

    private final RestTemplate restTemplate;

    public AIService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String reviewCode(AIRequest request) {

        String prompt = """
You are a Senior Software Engineer and Competitive Programming Mentor.

Analyze the following %s solution.

Reply ONLY in Markdown.

Use EXACTLY these headings.

# ✅ Overall Review

Write 2-3 lines.

# 🐞 Bugs

Mention all possible bugs.

# ⚡ Time Complexity

Mention complexity and explain why.

# 💾 Space Complexity

Mention complexity and explain why.

# 🚀 Better Approach

Suggest a better algorithm if possible.

# 📖 Explanation

Explain the code step by step.

# ⭐ Code Quality Score

Give a score out of 10 with one sentence explaining it.

Code:

%s

""".formatted(
                request.getLanguage(),
                request.getCode()
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, Object> body = Map.of(
                "model", "qwen2.5:1.5b",
                "prompt", prompt,
                "stream", false
        );

        HttpEntity<Map<String, Object>> entity =
                new HttpEntity<>(body, headers);

        Map response = restTemplate.postForObject(
                "http://localhost:11434/api/generate",
                entity,
                Map.class
        );

        return response.get("response").toString();
    }
}