package fdavid.ride_it_spring.entitys;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class RidePassenger {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private Long rideId;
    private String email;

    public RidePassenger() {
    }

    public RidePassenger(Long rideId, String email) {
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