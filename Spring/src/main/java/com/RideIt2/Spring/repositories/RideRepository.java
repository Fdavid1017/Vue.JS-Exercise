package com.RideIt2.Spring.repositories;

import java.time.LocalDateTime;
import java.util.List;

import com.RideIt2.Spring.entities.Ride;
import com.RideIt2.Spring.entities.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RideRepository extends JpaRepository<Ride, Long> {
    List<Ride> findByFromLocationAndToLocationAndWhenTimeBetweenAndSpacesGreaterThan(String fromLocation,
            String toLocation, LocalDateTime fromTime, LocalDateTime tillTime, int spaces);

    List<Ride> findByDriverIs(User driver);

    List<Ride> findByPassengersIs(User passenger);
}