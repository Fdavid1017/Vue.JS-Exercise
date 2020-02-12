package fdavid.ride_it_spring.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fdavid.ride_it_spring.entitys.Ride;
import fdavid.ride_it_spring.repositorys.RideRepository;

@RestController
@RequestMapping(value = "/ride")
public class RideController {
    RideRepository rideRepository;

    @Autowired
    public RideController(RideRepository rideRepository) {
        this.rideRepository = rideRepository;
    }

    @RequestMapping(value = "/all")
    public Iterable<Ride> getAll() {
        return rideRepository.findAll();
    }

    @RequestMapping(value = "/allid")
    public Iterable<Ride> getAllWithId() {
        return rideRepository.findAllWithIds();
    }

    @RequestMapping(value = "/id/{id}")
    public Optional<Ride> getById(@PathVariable Long id) {
        return rideRepository.findById(id);
    }

    @RequestMapping(value = "/findBetweenLocations/{fromLocation}/{toLocation}")
    public Iterable<Ride> getBetweenLocations(@PathVariable String fromLocation, @PathVariable String toLocation) {
        return rideRepository.findByFromLocationAndToLocation(fromLocation, toLocation);
    }

    @RequestMapping(value = "/findBetweenLocationsAvailable/{fromLocation}/{toLocation}")
    public Iterable<Ride> getBetweenLocationsAvailable(@PathVariable String fromLocation,
            @PathVariable String toLocation) {
        return rideRepository.findByFromLocationAndToLocation(fromLocation, toLocation);
    }

    @RequestMapping(value = "/updateSpace/{id}/{space}")
    public Ride updateSpace(@PathVariable Long id, @PathVariable int space) {
        Optional<Ride> ride = getById(id);
        if (ride.isPresent()) {
            Ride value = ride.get();
            value.setSpaces(space);
            return rideRepository.save(value);
        }

        return null;
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Ride create(@RequestBody Ride ride) {
        return rideRepository.save(ride);
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        rideRepository.deleteById(id);
    }
}