import React from 'react';
import { Link } from 'react-router-dom';
import './Patients.css';
const Appointment = () => {
  return (
    <div className="patients-card">
      <h1 className="patients-title">Appointment</h1>
      <div className="button-container">
        <Link to="/GetdataAppointment">
          <button className="action-button get-button">Show Appointments</button>
        </Link>
        <Link to="/AddAppointment">
          <button className="action-button post-button">Add Appointment</button>
        </Link>
        <Link to="/UpdateAppointment">
          <button className="action-button put-button">Edit</button>
        </Link>
        <Link to="/DeleteAppointment">
          <button className="action-button delete-button">Delete Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default Appointment;
