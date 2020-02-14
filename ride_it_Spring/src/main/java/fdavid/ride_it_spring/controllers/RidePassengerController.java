package fdavid.ride_it_spring.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fdavid.ride_it_spring.entitys.RidePassenger;
import fdavid.ride_it_spring.repositorys.RidePassengerRepository;

@RestController
@RequestMapping(value = "/ridePassenger")
public class RidePassengerController {
    RidePassengerRepository ridePassengerRepository;

    @Autowired
    public RidePassengerController(RidePassengerRepository ridePassengerRepository) {
        this.ridePassengerRepository = ridePassengerRepository;
    }

    @RequestMapping(value = "/all")
    public Iterable<RidePassenger> getAll() {
        return ridePassengerRepository.findAll();
    }

    @RequestMapping(value = "/byEmail/{email}")
    public Iterable<RidePassenger> getByEmail(@PathVariable String email) {
        return ridePassengerRepository.findByEmail(email);
    }

    @RequestMapping(value = "/byRideId/{id}")
    public Iterable<RidePassenger> getRideId(@PathVariable Long id) {
        return ridePassengerRepository.findByRideId(id);
    }

    @RequestMapping(value = "/id/{id}")
    public Optional<RidePassenger> getById(@PathVariable Long id) {
        return ridePassengerRepository.findById(id);
    }

    @RequestMapping("rideIdAndEmail/{rideId}/{email}")
    public RidePassenger getByIdAndEmail(@PathVariable Long rideId, @PathVariable String email) {
        return ridePassengerRepository.findByRideIdAndEmail(rideId, email);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public RidePassenger create(@RequestBody RidePassenger ridePassenger) {
        return ridePassengerRepository.save(ridePassenger);
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        ridePassengerRepository.deleteById(id);
    }
}