package com.RideIt2.Spring.services;

import java.time.LocalDateTime;
import java.util.List;

import com.RideIt2.Spring.entities.Ride;
import com.RideIt2.Spring.entities.User;
import com.RideIt2.Spring.repositories.RideRepository;
import com.RideIt2.Spring.repositories.UserRepository;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class RideServices {
    private final RideRepository rideRepository;
    private final UserRepository userRepository;

    public List<Ride> getAll() {
        return rideRepository.findAll();
    }

    public Ride getById(Long id) {
        return rideRepository.findById(id).orElse(null);
    }

    public List<Ride> getBetweenLocationsAtTime(String fromLocation, String toLocation, LocalDateTime fromTime,
            LocalDateTime tillTime) {
        return rideRepository.findByFromLocationAndToLocationAndWhenTimeBetweenAndSpacesGreaterThan(fromLocation,
                toLocation, fromTime, tillTime, 0);
    }

    public List<Ride> getByDriver(String email) {
        User driver = userRepository.findByEmailIs(email);

        if (driver == null) {
            return null;
        }

        return rideRepository.findByDriverIs(driver);
    }

    public List<Ride> getByPassenger(String email) {
        User driver = userRepository.findByEmailIs(email);

        if (driver == null) {
            return null;
        }

        return rideRepository.findByPassengersIs(driver);
    }

    public Ride createRide(Ride ride) {
        return rideRepository.save(ride);
    }

    public Ride addPassenger(Long id, String email) {
        Ride ride = getById(id);
        User user = userRepository.findByEmailIs(email);
        if (ride == null || user == null) {
            return null;
        }

        ride.setSpaces(ride.getSpaces() - 1);
        List<User> passengers = ride.getPassengers();
        passengers.add(user);
        ride.setPassengers(passengers);

        rideRepository.save(ride);

        return ride;
    }

    public Ride removePassenger(Long id, String email) {
        Ride ride = getById(id);
        User user = userRepository.findByEmailIs(email);
        if (ride == null || user == null) {
            return null;
        }

        ride.setSpaces(ride.getSpaces() + 1);
        List<User> passengers = ride.getPassengers();
        passengers.remove(user);
        ride.setPassengers(passengers);

        rideRepository.save(ride);

        return ride;
    }

    public void removeRide(Long id) {
        rideRepository.deleteById(id);
    }
}