package fdavid.ride_it_spring;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRideRepository extends CrudRepository<UserRideConnection, Long> {
    List<UserRideConnection> findByUserEmailIs(String email);

    List<UserRideConnection> findByUserEmailAndIsPassenger(String email, boolean isPassenger);

    List<UserRideConnection> findByRideIdIs(Long id);
}