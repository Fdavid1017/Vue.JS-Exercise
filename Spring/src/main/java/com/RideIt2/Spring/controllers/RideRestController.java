package com.RideIt2.Spring.controllers;

import java.time.LocalDateTime;
import java.util.List;

import com.RideIt2.Spring.entities.Ride;
import com.RideIt2.Spring.entities.User;
import com.RideIt2.Spring.services.RideServices;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class RideRestController {
    private final RideServices rideServices;

    // GET

    @GetMapping("/ride")
    public List<Ride> getAll() {
        return rideServices.getAll();
    }

    @GetMapping("/ride/{id}")
    public Ride getById(@PathVariable(value = "id") Long id) {
        return rideServices.getById(id);
    }

    @GetMapping("ride/{fromLocation}/{toLocation}/{fromTime}/{tillTime}")
    public List<Ride> getBetweenLocationsAtTime(@PathVariable(value = "fromLocation") String fromLocation,
            @PathVariable(value = "toLocation") String toLocation,
            @PathVariable(value = "fromTime") @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss") LocalDateTime fromTime,
            @PathVariable(value = "tillTime") @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss") LocalDateTime tillTime) {
        return rideServices.getBetweenLocationsAtTime(fromLocation, toLocation, fromTime, tillTime);
    }

    @GetMapping("ride/driver/{email}")
    public List<Ride> getByDriver(@PathVariable(value = "email") String email) {
        return rideServices.getByDriver(email);
    }

    @GetMapping("ride/passenger/{email}")
    public List<Ride> getByPassenger(@PathVariable(value = "email") String email) {
        return rideServices.getByPassenger(email);
    }

    // POST

    @PostMapping("ride")
    public Ride createRide(@RequestBody Ride ride) {
        return rideServices.createRide(ride);
    }

    // PUT

    @PutMapping("ride/addPassenger/{id}/{email}")
    public Ride addPassenger(@PathVariable Long id, @PathVariable String email) {
        return rideServices.addPassenger(id, email);
    }

    @PutMapping("ride/removePassenger/{id}/{email}")
    public Ride removePassenger(@PathVariable Long id, @PathVariable String email) {
        return rideServices.removePassenger(id, email);
    }

    // DELETE

    @DeleteMapping("ride/{id}")
    public void removeRide(@PathVariable Long id) {
        rideServices.removeRide(id);
    }
}