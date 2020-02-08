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
    private String from;
    private String to;
    private LocalDateTime when;
    private int spaces;
    private String car;
    private String description;

    public Ride() {
    }

    public Ride(String from, String to, LocalDateTime when, int spaces, String car, String description) {
        this.from = from;
        this.to = to;
        this.when = when;
        this.spaces = spaces;
        this.car = car;
        this.description = description;
    }

    public String getFrom() {
        return this.from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getTo() {
        return this.to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public LocalDateTime getWhen() {
        return this.when;
    }

    public void setWhen(LocalDateTime when) {
        this.when = when;
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