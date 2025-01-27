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

import com.example.demo.Model.Patient;

import com.example.demo.Service.PatientService;



@RestController
@CrossOrigin
public class Controller {

	

	@Autowired

	PatientService aser;

@PostMapping("addpatient")

	public Patient add(@RequestBody Patient d)

	{

		return aser.saveinfo(d);

	}


@GetMapping("showpdetails")

	public List<Patient> show()

	{

		return aser.showinfo();

	}


@PutMapping("update/{id}")
public String modifybyId(@PathVariable int id,@RequestBody Patient ss)
{
return aser.updateInfobyId(id,ss);
}
	

@DeleteMapping("delid/{id}")
	public  void deleteByid(@PathVariable int id)

    {

    	aser.deleteid(id);

    }


}