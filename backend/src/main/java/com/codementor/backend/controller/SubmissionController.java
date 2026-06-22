package com.codementor.backend.controller;

import com.codementor.backend.entity.Submission;
import com.codementor.backend.service.SubmissionService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/submissions")
public class SubmissionController {

    private final SubmissionService submissionService;

    public SubmissionController(
            SubmissionService submissionService) {

        this.submissionService = submissionService;
    }

    @PostMapping("/{problemId}")
    public Submission createSubmission(
            Authentication authentication,
            @PathVariable Long problemId,
            @RequestBody Submission submission) {

        String email =
                authentication.getName();

        return submissionService.createSubmission(
                email,
                problemId,
                submission
        );
    }

    @GetMapping
    public List<Submission> getAllSubmissions() {

        return submissionService.getAllSubmissions();
    }

    @GetMapping("/{id}")
    public Submission getSubmissionById(
            @PathVariable Long id) {

        return submissionService.getSubmissionById(id);
    }

    @GetMapping("/my")
    public List<Submission> getMySubmissions(
            Authentication authentication) {

        String email =
                authentication.getName();

        return submissionService.getUserSubmissions(email);
    }
}