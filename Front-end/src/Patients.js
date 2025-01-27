import React from 'react';
import { Link } from 'react-router-dom';
import './Patients.css';
const Patients = () => {
  return (
    <div className="patients-card">
      <h1 className="patients-title">Patients</h1>
      <div className="button-container">
        <Link to="/GetdataPatient">
          <button className="action-button get-button">Show Patient Details</button>
        </Link>
        <Link to="/Addpatient">
          <button className="action-button post-button">Add Details</button>
        </Link>
        <Link to="/UpdatePatient">
          <button className="action-button put-button">Edit</button>
        </Link>
        <Link to="/DeletePatient">
          <button className="action-button delete-button">Delete Patient Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Patients;
