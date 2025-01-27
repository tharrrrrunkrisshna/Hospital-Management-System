package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import com.example.demo.Model.Patient;
import com.example.demo.Repository.PatientRepo;
@Service
public class PatientService {
   @Autowired
	PatientRepo res;

public List<Patient> showinfo()

	{

		return res.findAll();

	}


public Patient saveinfo(Patient p)

	{

		return res.save(p);

	}


public String updateInfobyId(int id,Patient ss)
{
res.saveAndFlush(ss);
if(res.existsById(id))
{
return "Updated";
}
else
{
return "Enter Valid PatientId";
}
}


public void deleteid(int id)

 	{

 		res.deleteById(id);

 	}


}