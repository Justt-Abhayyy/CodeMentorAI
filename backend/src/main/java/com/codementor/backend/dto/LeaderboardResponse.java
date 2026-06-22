package com.codementor.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class LeaderboardResponse {

    private int rank;

    private String name;

    private long submissions;
}