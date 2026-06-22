package com.codementor.backend.controller;

import com.codementor.backend.entity.Problem;
import com.codementor.backend.service.ProblemService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/problems")
public class ProblemController {

    private final ProblemService problemService;

    public ProblemController(
            ProblemService problemService) {

        this.problemService = problemService;
    }

    @PostMapping
    public Problem createProblem(
            @Valid @RequestBody Problem problem) {

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
            @PathVariable Long id,
            @Valid @RequestBody Problem problem) {

        return problemService.updateProblem(
                id,
                problem
        );
    }

    @DeleteMapping("/{id}")
    public String deleteProblem(
            @PathVariable Long id) {

        problemService.deleteProblem(id);

        return "Problem deleted successfully";
    }
}