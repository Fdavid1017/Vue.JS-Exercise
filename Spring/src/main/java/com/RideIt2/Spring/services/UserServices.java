package com.RideIt2.Spring.services;

import java.util.List;

import com.RideIt2.Spring.entities.User;
import com.RideIt2.Spring.repositories.UserRepository;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServices {
    private final UserRepository userRepository;

    public List<User> getAll() {
        return userRepository.findAll();
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmailIs(email);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }
}