package fdavid.ride_it_spring;

import javax.persistence.Entity;

@Entity
public class UserRideConnection {
    String userEmail;
    Long rideId;
    boolean isPassenger;
}