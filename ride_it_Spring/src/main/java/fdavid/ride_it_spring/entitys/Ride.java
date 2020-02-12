package fdavid.ride_it_spring.entitys;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Ride {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String fromLocation;
    private String toLocation;
    private LocalDateTime whenTime;
    private int spaces;
    private String car;
    private String description;

    public Ride() {
    }

    public Ride(String fromLocation, String toLocation, LocalDateTime whenTime, int spaces, String car,
            String description) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.whenTime = whenTime;
        this.spaces = spaces;
        this.car = car;
        this.description = description;
    }

    public String getFromLocation() {
        return this.fromLocation;
    }

    public void setFromLocation(String fromLocation) {
        this.fromLocation = fromLocation;
    }

    public String getToLocation() {
        return this.toLocation;
    }

    public void setToLocation(String toLocation) {
        this.toLocation = toLocation;
    }

    public LocalDateTime getWhenTime() {
        return this.whenTime;
    }

    public void setWhenTime(LocalDateTime whenTime) {
        this.whenTime = whenTime;
    }

    public int getSpaces() {
        return this.spaces;
    }

    public void setSpaces(int spaces) {
        this.spaces = spaces;
    }

    public String getCar() {
        return this.car;
    }

    public void setCar(String car) {
        this.car = car;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}