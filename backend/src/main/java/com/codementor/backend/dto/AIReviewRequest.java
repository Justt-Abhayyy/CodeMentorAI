package com.codementor.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AIReviewRequest {

    private String code;

    private String language;
}