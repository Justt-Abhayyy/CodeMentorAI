package com.codementor.backend.repository;

import com.codementor.backend.entity.Submission;
import com.codementor.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubmissionRepository
        extends JpaRepository<Submission, Long> {

    List<Submission> findByUser(User user);
}