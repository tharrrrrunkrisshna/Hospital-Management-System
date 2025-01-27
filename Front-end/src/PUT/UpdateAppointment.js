import './Update.css';
import React, { useState } from 'react';
import Axios from 'axios';

function UpdateAppointment({ onDataUpdate }) {
    const [ids, setIds] = useState(0);
  const [uname, setUname] = useState('');
  const [pwd, setPwd] = useState('');
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleButtonClick = () => {
    setIsSubmitted(!isSubmitted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.put(`http://localhost:8080/updatea/${ids}`, {
        apid: ids,
      docname: uname,
      spl: pwd,
    })
      .then((response) => {
        console.log(response);
        setIsSubmitted(true);
        // Call onDataUpdate to trigger data update in the parent component
        onDataUpdate();
      })
      .catch((error) => {
        console.error('Error updating item:', error);
      });
  };

  return (
    <div className="update-container">
      <div className="update-card">
        <form onSubmit={handleSubmit}>
        <p>Appointment ID</p>
          <input
            type="number"
            placeholder="Patient ID"
            onChange={(e) => {
              setIds(e.target.value);
            }}
          />
          <p>Doctor Name</p>
          <input
            type="text"
            placeholder="Doctor Name"
            onChange={(e) => {
              setUname(e.target.value);
            }}
          />

          <p>Specialists</p>
          <input
            type="text"
            placeholder="Specialist"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />

          <div className="update-btn-container">
            <button
              className="update-btn"
              type="submit"
              onClick={handleButtonClick}
            >
              Update
            </button>
            {isSubmitted && (
              <p className="update-success-message">Updated Successfully!</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateAppointment;
