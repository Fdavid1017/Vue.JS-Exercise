package fdavid.ride_it_spring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fdavid.ride_it_spring.entitys.User;
import fdavid.ride_it_spring.repositorys.UserRepository;


@RestController
@RequestMapping(value = "/user")
public class UserController {
    UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @RequestMapping(value = "/all")
    public Iterable<User> getAll() {
        return userRepository.findAll();
    }

    @RequestMapping(value = "/email/{email}")
    public User getByEmail(@PathVariable String email) {
        return userRepository.findByEmailIs(email);
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public void create(@RequestBody User user) {
        userRepository.save(user);
    }
}