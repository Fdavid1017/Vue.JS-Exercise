package fdavid.ride_it_spring;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserRide {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private Long rideId;
    private String email;

    public UserRide() {
    }

    public UserRide(Long rideId, String email) {
        this.rideId = rideId;
        this.email = email;
    }

    public Long getRideId() {
        return this.rideId;
    }

    public void setRideId(Long rideId) {
        this.rideId = rideId;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}