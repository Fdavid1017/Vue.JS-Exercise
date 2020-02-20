package fdavid.ride_it_spring.repositorys;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fdavid.ride_it_spring.entitys.RidePassenger;

@Qualifier("ridePassenger")
@Repository
public interface RidePassengerRepository extends JpaRepository<RidePassenger, Long> {
    List<RidePassenger> findByEmail(String email);

    List<RidePassenger> findByRideId(Long rideId);
    
    RidePassenger findByRideIdAndEmail(Long rideId, String email);
}