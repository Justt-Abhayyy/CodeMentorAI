package com.codementor.backend.service;

import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;

@Service
public class CodeExecutionService {

    public String executeJavaCode(
            String code) {

        try {

            Path tempDir =
                    Files.createTempDirectory(
                            "codementor"
                    );

            File javaFile =
                    new File(
                            tempDir.toFile(),
                            "Main.java"
                    );

            FileWriter writer =
                    new FileWriter(
                            javaFile
                    );

            writer.write(code);
            writer.close();

            Process compileProcess =
                    new ProcessBuilder(
                            "javac",
                            javaFile.getAbsolutePath()
                    ).start();

            compileProcess.waitFor();

            BufferedReader compileErrors =
                    new BufferedReader(
                            new InputStreamReader(
                                    compileProcess
                                            .getErrorStream()
                            )
                    );

            StringBuilder compileOutput =
                    new StringBuilder();

            String line;

            while ((line =
                    compileErrors.readLine())
                    != null) {

                compileOutput
                        .append(line)
                        .append("\n");
            }

            if (!compileOutput.isEmpty()) {

                return compileOutput.toString();
            }

            Process runProcess =
                    new ProcessBuilder(
                            "java",
                            "-cp",
                            tempDir.toString(),
                            "Main"
                    ).start();

            BufferedReader outputReader =
                    new BufferedReader(
                            new InputStreamReader(
                                    runProcess
                                            .getInputStream()
                            )
                    );

            StringBuilder output =
                    new StringBuilder();

            while ((line =
                    outputReader.readLine())
                    != null) {

                output.append(line)
                        .append("\n");
            }

            runProcess.waitFor();

            return output.toString();

        } catch (Exception e) {

            return e.getMessage();
        }
    }
}