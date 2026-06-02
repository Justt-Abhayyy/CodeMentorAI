package com.codementor.backend.controller;

import com.codementor.backend.entity.User;
import com.codementor.backend.service.UserService;
import org.springframework.web.bind.annotation.*;
import com.codementor.backend.dto.LoginRequest;
import com.codementor.backend.dto.LoginResponse;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }
    @PostMapping("/login")
public LoginResponse loginUser(@RequestBody LoginRequest request) {
    return userService.loginUser(request);
}

}