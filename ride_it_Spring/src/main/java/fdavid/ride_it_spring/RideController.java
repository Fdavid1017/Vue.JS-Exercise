package fdavid.ride_it_spring;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @RequestMapping(value = "/FromAndTo/{from}&{to}")
    public Iterable<Ride> findByFromAndTo(@PathVariable String from, @PathVariable String to) {
        return rideRepository.findByFromAndTo(from, to);
    }

    @RequestMapping(value = "/FromAndToAvailable/{from}&{to}")
    public Iterable<Ride> findByFromAndToAvailable(@PathVariable String from, @PathVariable String to) {
        return rideRepository.findByFromAndToAvailable(from, to);
    }

    @RequestMapping(value = "/when/{when}")
    public Iterable<Ride> findByWhen(@PathVariable LocalDateTime when) {
        return rideRepository.findByWhenIs(when);
    }

    @RequestMapping(value = "/id/{id}")
    public Ride findById(@PathVariable Long id) {
        return rideRepository.findByIdIs(id);
    }
}