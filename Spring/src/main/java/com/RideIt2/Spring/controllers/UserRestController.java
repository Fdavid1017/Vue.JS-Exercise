package com.RideIt2.Spring.controllers;

import java.util.List;

import com.RideIt2.Spring.entities.User;
import com.RideIt2.Spring.services.UserServices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class UserRestController {
    private final UserServices userServices;

    // GET

    @GetMapping("/user")
    public List<User> getAll() {
        return userServices.getAll();
    }

    @GetMapping("/user/{email}")
    public User getUserByEmail(@PathVariable(value = "email") String email) {
        return userServices.getUserByEmail(email);
    }

    // POST

    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        return userServices.createUser(user);
    }
}