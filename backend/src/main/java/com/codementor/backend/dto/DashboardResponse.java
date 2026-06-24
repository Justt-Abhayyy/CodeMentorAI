package com.codementor.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class DashboardResponse {

    private long totalProblems;

    private long totalSubmissions;

    private long solvedProblems;

    private int currentRank;
}