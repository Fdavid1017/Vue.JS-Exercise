package fdavid.ride_it_spring;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Qualifier("ride")
@Repository
public interface RideRepository extends CrudRepository<Ride, Long> {
    Ride findByIdIs(Long id);
}