package fdavid.ride_it_spring.repositorys;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import fdavid.ride_it_spring.entitys.UserRide;

@Qualifier("userRide")
@Repository
public interface UserRideRepository extends CrudRepository<UserRide, Long> {
    List<UserRide> findByEmail(String email);

    UserRide findByRideId(Long rideId);

    UserRide findByRideIdAndEmail(Long rideId, String email);
}