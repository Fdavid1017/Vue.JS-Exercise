package fdavid.ride_it_spring;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Qualifier("user")
@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    User findByEmailIs(String email);
}