package fdavid.ride_it_spring;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RideRepository extends CrudRepository<Ride, Long> {
    List<Ride> findByFromAndTo(String from, String to);

    @Query("select * from Ride r where r.from = ?1 and r.to = ?1 and r.spaces > 0")
    List<Ride> findByFromAndToAvailable(String from, String to);

    List<Ride> findByWhenIs(LocalDateTime when);

    Ride findByIdIs(Long id);
}