package com.codementor.backend.service;

import com.codementor.backend.entity.Problem;
import com.codementor.backend.repository.ProblemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProblemService {

    private final ProblemRepository problemRepository;

    public ProblemService(
            ProblemRepository problemRepository) {

        this.problemRepository = problemRepository;
    }

    public Problem createProblem(
            Problem problem) {

        return problemRepository.save(problem);
    }

    public List<Problem> getAllProblems() {

        return problemRepository.findAll();
    }

    public Problem getProblemById(
            Long id) {

        return problemRepository
                .findById(id)
                .orElse(null);
    }

    public Problem updateProblem(
            Long id,
            Problem updatedProblem) {

        Problem problem =
                problemRepository.findById(id)
                        .orElse(null);

        if (problem == null) {
            return null;
        }

        problem.setTitle(updatedProblem.getTitle());
        problem.setDescription(updatedProblem.getDescription());
        problem.setDifficulty(updatedProblem.getDifficulty());
        problem.setTag(updatedProblem.getTag());

        return problemRepository.save(problem);
    }

    public void deleteProblem(
            Long id) {

        problemRepository.deleteById(id);
    }
}