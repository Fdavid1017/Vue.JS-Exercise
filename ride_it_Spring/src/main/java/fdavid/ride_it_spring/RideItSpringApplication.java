package fdavid.ride_it_spring;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class RideItSpringApplication {

	public static void main(String[] args) {
		// SpringApplication.run(RideItSpringApplication.class, args);
		SpringApplication app = new SpringApplication(SpringApplication.class);
		app.setDefaultProperties(Collections.singletonMap("server.port", "8081"));
		app.run(args);
	}

}
