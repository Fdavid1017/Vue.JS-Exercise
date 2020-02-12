package fdavid.ride_it_spring.repositorys;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import fdavid.ride_it_spring.entitys.Ride;

@Qualifier("ride")
@Repository
public interface RideRepository extends CrudRepository<Ride, Long> {
    Ride findByIdIs(Long id);

    List<Ride> findByFromLocationAndToLocation(String fromLocation,String toLocation);
    
    @Query(value = "SELECT * FROM ride r WHERE r.from_location = ?1 AND r.to_location = ?2 AND r.spaces > 0", nativeQuery = true)
    List<Ride> findBetweenFromLocationAndToLocationAvailable(String fromLocation,String toLocation);
}