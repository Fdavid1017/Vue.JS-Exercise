package fdavid.ride_it_spring.repositorys;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import fdavid.ride_it_spring.entitys.User;

@Qualifier("user")
@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    User findByEmailIs(String email);
}