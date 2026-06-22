package com.codementor.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class AIReviewResponse {

    private String timeComplexity;

    private String spaceComplexity;

    private List<String> suggestions;
}