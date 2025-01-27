import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

function Addpatient() {
  const initialFormData = {
    username: '',
    password: '',
    firstname: '',
    gender: '',
    email: '',
    patient_ID: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      // Check if any required field is empty
      if (
        formData.username === '' ||
        formData.password === '' ||
        formData.firstname === '' ||
        formData.gender === '' ||
        formData.email === '' ||
        formData.patient_ID === ''
      ) {
        setError('Please enter all fields.');
        setSuccess('');
        return;
      }

      // Clear previous error and success messages
      setError('');
      setSuccess('');

      const response = await axios.post('http://127.0.0.1:8080/addpatient', formData);
      console.log(response.data);

      // Display success message
      setSuccess('Form submitted successfully.');

      // Clear the form after successful submission
      setFormData(initialFormData);
    } catch (error) {
      // Handle errors here
      console.error('Error submitting the form:', error);
      setError('An error occurred while submitting the form.');
      setSuccess('');
    }
  };

  return (
    <div className="signup-container-center">
      <div className="signup-card">
        <h2>Add Patients Details</h2>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <label>Username</label>
        <input name="username" onChange={handleChange} type="text" value={formData.username} />
        <br />
        <label>Password</label>
        <input name="password" onChange={handleChange} type="text" value={formData.password} />
        <br />
        <label>Name</label>
        <input name="firstname" onChange={handleChange} type="text" value={formData.firstname} />
        <br />
        <label>Gender</label>
        <input name="gender" onChange={handleChange} type="text" value={formData.gender} />
        <br />
        <label>Email</label>
        <input name="email" onChange={handleChange} type="text" value={formData.email} />
        <br />
        <label>PatientID</label>
        <input name="patient_ID" onChange={handleChange} type="text" value={formData.patient_ID} />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Addpatient;
