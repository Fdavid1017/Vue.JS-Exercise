package fdavid.ride_it_spring;

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

    public Ride(String from, String to, LocalDateTime when, int spaces, String car, String description) {
        this.fromLocation = from;
        this.toLocation = to;
        this.whenTime = when;
        this.spaces = spaces;
        this.car = car;
        this.description = description;
    }

    public String getFrom() {
        return this.fromLocation;
    }

    public void setFrom(String from) {
        this.fromLocation = from;
    }

    public String getTo() {
        return this.toLocation;
    }

    public void setTo(String to) {
        this.toLocation = to;
    }

    public LocalDateTime getWhen() {
        return this.whenTime;
    }

    public void setWhen(LocalDateTime when) {
        this.whenTime = when;
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