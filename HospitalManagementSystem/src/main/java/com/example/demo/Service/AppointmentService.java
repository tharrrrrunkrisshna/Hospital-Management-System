package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import com.example.demo.Model.Appointment;
import com.example.demo.Repository.AppointmentRepo;
@Service
public class AppointmentService {
   @Autowired
	AppointmentRepo res;

public List<Appointment> showinfo()

	{

		return res.findAll();

	}


public Appointment saveinfo(Appointment p)

	{

		return res.save(p);

	}


public String updateInfobyId(int id,Appointment ss)
{
res.saveAndFlush(ss);
if(res.existsById(id))
{
return "Updated";
}
else
{
return "Enter Valid AppointmentId";
}
}


public void deleteid(int id)

 	{

 		res.deleteById(id);

 	}


}