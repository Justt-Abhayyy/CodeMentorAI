package com.codementor.backend.controller;

import com.codementor.backend.dto.CodeExecutionRequest;
import com.codementor.backend.dto.CodeExecutionResponse;
import com.codementor.backend.service.CodeExecutionService;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/code")
public class CodeExecutionController {

    private final CodeExecutionService
            codeExecutionService;

    public CodeExecutionController(
            CodeExecutionService
                    codeExecutionService) {

        this.codeExecutionService =
                codeExecutionService;
    }

    @PostMapping("/run")
    public CodeExecutionResponse runCode(
            @RequestBody
            CodeExecutionRequest request) {

        String output =
                codeExecutionService
                        .executeJavaCode(
                                request.getCode()
                        );

        return new CodeExecutionResponse(
                output
        );
    }
}