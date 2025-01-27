import React from 'react';
import { Link } from 'react-router-dom';
import './Patients.css';
const Doctors = () => {
  return (
    <div className="patients-card">
      <h1 className="patients-title">Doctors</h1>
      <div className="button-container">
        <Link to="/GetdataDoctor">
          <button className="action-button get-button">GET</button>
        </Link>
        <Link to="/AddDoctor">
          <button className="action-button post-button">POST</button>
        </Link>
        <Link to="/UpdateDoctor">
          <button className="action-button put-button">PUT</button>
        </Link>
        <Link to="/DeleteDoctor">
          <button className="action-button delete-button">DELETE</button>
        </Link>
      </div>
    </div>
  );
};

export default Doctors;
