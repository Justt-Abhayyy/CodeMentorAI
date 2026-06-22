package com.codementor.backend.repository;

import com.codementor.backend.entity.Problem;
import com.codementor.backend.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProblemRepository
        extends JpaRepository<Problem, Long> {

    List<Problem> findByTag(Tag tag);
}