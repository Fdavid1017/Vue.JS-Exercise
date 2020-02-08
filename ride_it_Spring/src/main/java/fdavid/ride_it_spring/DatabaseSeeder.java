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

    @Autowired
    public DatabaseSeeder(UserRepository userRepository, RideRepository rideRepository) {
        this.userRepository = userRepository;
        this.rideRepository = rideRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        List<User> users = new ArrayList<>();
        List<Ride> rides = new ArrayList<>();

        userRepository.saveAll(users);
        rideRepository.saveAll(rides);
    }
}