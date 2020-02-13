package fdavid.ride_it_spring.repositorys;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import fdavid.ride_it_spring.entitys.Ride;

@Qualifier("ride")
@Repository
public interface RideRepository extends CrudRepository<Ride, Long> {
    List<Ride> findByFromLocationAndToLocation(String fromLocation, String toLocation);

    @Query(value = "SELECT * FROM ride r WHERE (r.from_location = ?1 AND r.to_location = ?2) AND (r.when_time > ?3 AND r.when_time < ?4) AND r.spaces > 0", nativeQuery = true)
    List<Ride> findRidesByLocationAndTime(String fromLocation, String toLocation, LocalDateTime fromTime,
            LocalDateTime toTime);

    @Query(value = "SELECT id FROM ride", nativeQuery = true)
    List<Ride> findAllWithIds();
}