package com.example.demo.Model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.Id;


@Entity
public class Patient {
	@Column(name="USERNAME")
	private String username;
	@Column(name="PASSWORD")
	private String password;
	@Column(name="NAME")
	private String firstname;
	@Column(name="GENDER")
	private String gender;
	@Column(name="EMAIL")
	private String email;
	@Id
	@Column(name="PATIENT_ID")
	private int patient_ID;
	public Patient() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Patient(String username, String password, String firstname, String gender, String email, int patient_ID) {
		super();
		this.username = username;
		this.password = password;
		this.firstname = firstname;
		this.gender = gender;
		this.email = email;
		this.patient_ID = patient_ID;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getPatient_ID() {
		return patient_ID;
	}
	public void setPatient_ID(int patient_ID) {
		this.patient_ID = patient_ID;
	}
	
	
}
