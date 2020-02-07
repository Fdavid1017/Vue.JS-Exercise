package com.example.springbootdemo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class HotelBooking {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String hotelName;
    private double pricePerNight;
    private int numberOfNights;

    public HotelBooking() {
    }

    public HotelBooking(String hotelName, double pricePerNight, int numberOfNights) {
        this.hotelName = hotelName;
        this.pricePerNight = pricePerNight;
        this.numberOfNights = numberOfNights;
    }

    public Long getId() {
        return this.id;
    }

    public String getHotelName() {
        return this.hotelName;
    }

    public double getPricePerNight() {
        return this.pricePerNight;
    }

    public int getNumberOfNights() {
        return this.numberOfNights;
    }

    public double getTotalPrice() {
        return getPricePerNight() * getNumberOfNights();
    }
}