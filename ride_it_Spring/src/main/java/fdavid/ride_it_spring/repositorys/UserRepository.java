package fdavid.ride_it_spring.repositorys;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fdavid.ride_it_spring.entitys.User;

@Qualifier("user")
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmailIs(String email);
}