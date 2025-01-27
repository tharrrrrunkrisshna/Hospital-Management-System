package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.Model.Appointment;



public interface AppointmentRepo extends JpaRepository<Appointment, Integer>{
	 boolean existsById(Integer id);




}