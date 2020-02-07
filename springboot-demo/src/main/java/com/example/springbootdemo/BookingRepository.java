package com.example.springbootdemo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends CrudRepository<HotelBooking, Long> {
    List<HotelBooking> findByPricePerNightLessThan(Double price);
}