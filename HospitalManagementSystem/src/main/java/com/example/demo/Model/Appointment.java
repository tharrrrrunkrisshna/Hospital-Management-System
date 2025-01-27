package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Appointment {
	@Id
	private int apid;
	private String docname;
	private String spl;
	public Appointment() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Appointment(int apid, String docname, String spl) {
		super();
		this.apid = apid;
		this.docname = docname;
		this.spl = spl;
	}
	public int getApid() {
		return apid;
	}
	public void setApid(int apid) {
		this.apid = apid;
	}
	public String getDocname() {
		return docname;
	}
	public void setDocname(String docname) {
		this.docname = docname;
	}
	public String getSpl() {
		return spl;
	}
	public void setSpl(String spl) {
		this.spl = spl;
	}
	
}
