package com.codementor.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class RecommendationResponse {

    private String title;

    private String difficulty;

    private String tag;
}