package com.codementor.backend.service;

import com.codementor.backend.dto.LoginRequest;
import com.codementor.backend.dto.LoginResponse;
import com.codementor.backend.dto.UpdateProfileRequest;
import com.codementor.backend.dto.UserProfileResponse;
import com.codementor.backend.entity.User;
import com.codementor.backend.exception.EmailAlreadyExistsException;
import com.codementor.backend.repository.UserRepository;
import com.codementor.backend.security.JwtService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public UserService(UserRepository userRepository,
                       BCryptPasswordEncoder passwordEncoder,
                       JwtService jwtService) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public User registerUser(User user) {

        User existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser != null) {
            throw new EmailAlreadyExistsException("Email already exists");
        }

        user.setPassword(
                passwordEncoder.encode(user.getPassword())
        );

        return userRepository.save(user);
    }

    public LoginResponse loginUser(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail());

        if (user == null) {
            return new LoginResponse(
                    "Invalid email or password",
                    null
            );
        }

        boolean passwordMatches =
                passwordEncoder.matches(
                        request.getPassword(),
                        user.getPassword()
                );

        if (!passwordMatches) {
            return new LoginResponse(
                    "Invalid email or password",
                    null
            );
        }

        String token =
                jwtService.generateToken(user.getEmail());

        return new LoginResponse(
                "Login successful",
                token
        );
    }

    public UserProfileResponse getProfile(String email) {

        User user = userRepository.findByEmail(email);

        return new UserProfileResponse(
                user.getId(),
                user.getName(),
                user.getEmail()
        );
    }

    public UserProfileResponse updateProfile(
            String currentEmail,
            UpdateProfileRequest request) {

        User user =
                userRepository.findByEmail(currentEmail);

        user.setName(request.getName());
        user.setEmail(request.getEmail());

        User updatedUser =
                userRepository.save(user);

        return new UserProfileResponse(
                updatedUser.getId(),
                updatedUser.getName(),
                updatedUser.getEmail()
        );
    }
}