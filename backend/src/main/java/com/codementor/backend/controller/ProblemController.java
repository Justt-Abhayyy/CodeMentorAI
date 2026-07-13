package com.codementor.backend.controller;

import com.codementor.backend.entity.Problem;
import com.codementor.backend.service.ProblemService;
import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/problems")
public class ProblemController {

    private static final String ADMIN_EMAIL =
            "Codementorr@gmail.com";

    private final ProblemService problemService;

    public ProblemController(
            ProblemService problemService) {

        this.problemService = problemService;
    }

    @PostMapping
    public Problem createProblem(

            Authentication authentication,

            @Valid @RequestBody Problem problem) {

        validateAdmin(authentication);

        return problemService.createProblem(problem);
    }

    @GetMapping
    public List<Problem> getAllProblems() {

        return problemService.getAllProblems();
    }

    @GetMapping("/{id}")
    public Problem getProblemById(
            @PathVariable Long id) {

        return problemService.getProblemById(id);
    }

    @PutMapping("/{id}")
    public Problem updateProblem(

            Authentication authentication,

            @PathVariable Long id,

            @Valid @RequestBody Problem problem) {

        validateAdmin(authentication);

        return problemService.updateProblem(
                id,
                problem
        );
    }

    @DeleteMapping("/{id}")
    public String deleteProblem(

            Authentication authentication,

            @PathVariable Long id) {

        validateAdmin(authentication);

        problemService.deleteProblem(id);

        return "Problem deleted successfully";
    }

    private void validateAdmin(
        Authentication authentication) {

    if (authentication == null) {

        throw new ResponseStatusException(

                HttpStatus.UNAUTHORIZED,

                "Authentication Required"

        );

    }

    String email = authentication.getName();

    if (!ADMIN_EMAIL.equalsIgnoreCase(email)) {

        throw new ResponseStatusException(

                HttpStatus.FORBIDDEN,

                "Admin Access Required"

        );

    }

}

}