package com.example.demo.Controller;
import java.util.List;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.PutMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Appointment;

import com.example.demo.Service.AppointmentService;



@RestController
@CrossOrigin
public class ApController {

	

	@Autowired

	AppointmentService aser;

@PostMapping("addAppointment")

	public Appointment add(@RequestBody Appointment d)

	{

		return aser.saveinfo(d);

	}


@GetMapping("showadetails")

	public List<Appointment> show()

	{

		return aser.showinfo();

	}


@PutMapping("updatea/{id}")
public String modifybyId(@PathVariable int id,@RequestBody Appointment ss)
{
return aser.updateInfobyId(id,ss);
}
	

@DeleteMapping("delida/{id}")
	public  void deleteByid(@PathVariable int id)

    {

    	aser.deleteid(id);

    }


}