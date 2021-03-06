package fdavid.ride_it_spring.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fdavid.ride_it_spring.entitys.UserRide;
import fdavid.ride_it_spring.repositorys.UserRideRepository;

@RestController
@RequestMapping(value = "/userRide")
public class UserRideController {
    UserRideRepository userRideRepository;

    @Autowired
    public UserRideController(UserRideRepository userRideRepository) {
        this.userRideRepository = userRideRepository;
    }

    @RequestMapping(value = "/all")
    public Iterable<UserRide> getAll() {
        return userRideRepository.findAll();
    }

    @RequestMapping(value = "/byEmail/{email}")
    public Iterable<UserRide> getByEmail(@PathVariable String email) {
        return userRideRepository.findByEmail(email);
    }

    @RequestMapping(value = "/byRideId/{id}")
    public UserRide getRideId(@PathVariable Long id) {
        return userRideRepository.findByRideId(id);
    }

    @RequestMapping(value = "/id/{id}")
    public Optional<UserRide> getById(@PathVariable Long id) {
        return userRideRepository.findById(id);
    }

    @RequestMapping("rideIdAndEmail/{rideId}/{email}")
    public UserRide getByIdAndEmail(@PathVariable Long rideId, @PathVariable String email) {
        return userRideRepository.findByRideIdAndEmail(rideId, email);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public UserRide create(@RequestBody UserRide userRide) {
        return userRideRepository.save(userRide);
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        userRideRepository.deleteById(id);
    }
}