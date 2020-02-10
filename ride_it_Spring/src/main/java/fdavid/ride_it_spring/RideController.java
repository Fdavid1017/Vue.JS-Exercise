package fdavid.ride_it_spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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

    @RequestMapping(value = "/id/{id}")
    public Ride getById(@PathVariable Long id) {
        return rideRepository.findByIdIs(id);
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
    public void updateSpace(@PathVariable Long id, @PathVariable int space) {
        Ride ride = getById(id);
        ride.setSpaces(space);

        rideRepository.save(ride);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public void create(@RequestBody Ride ride) {
        rideRepository.save(ride);
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        rideRepository.deleteById(id);
    }
}