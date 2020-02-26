package com.RideIt2.Spring.repositories;

import com.RideIt2.Spring.entities.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmailIs(String email);
}