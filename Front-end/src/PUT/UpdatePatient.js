import './Update.css';
import React, { useState } from 'react';
import Axios from 'axios';

function UpdatePatient({ onDataUpdate }) {
  const [uname, setUname] = useState('');
  const [pwd, setPwd] = useState('');
  const [nme, setName] = useState('');
  const [gen, setGen] = useState('');
  const [mail, setEmail] = useState('');
  const [ids, setIds] = useState(0);
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleButtonClick = () => {
    setIsSubmitted(!isSubmitted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.put(`http://localhost:8080/update/${ids}`, {
      username: uname,
      password: pwd,
      firstname: nme,
      gender: gen,
      email: mail,
      patient_ID: ids,
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
          <p>Username</p>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUname(e.target.value);
            }}
          />

          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />

          <p>Name</p>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <p>Gender</p>
          <input
            type="text"
            placeholder="Gender"
            onChange={(e) => {
              setGen(e.target.value);
            }}
          />

          <p>Email</p>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <p>Patient ID</p>
          <input
            type="number"
            placeholder="Patient ID"
            onChange={(e) => {
              setIds(e.target.value);
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

export default UpdatePatient;
