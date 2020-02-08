package fdavid.ride_it_spring;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseSeeder implements CommandLineRunner {
    UserRepository userRepository;
    RideRepository rideRepository;
    UserRideRepository userRideRepository;

    @Autowired
    public DatabaseSeeder(UserRepository userRepository, RideRepository rideRepository,
            UserRideRepository userRideRepository) {
        this.userRepository = userRepository;
        this.rideRepository = rideRepository;
        this.userRideRepository = userRideRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        List<User> users = new ArrayList<>();
        List<Ride> ride = new ArrayList<>();
        List<UserRideConnection> userRide = new ArrayList<>();

        userRepository.saveAll(users);
        rideRepository.saveAll(ride);
        userRideRepository.saveAll(userRide);
    }
}