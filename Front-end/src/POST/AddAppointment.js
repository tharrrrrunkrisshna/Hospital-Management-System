import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

function AddAppointment() {
  const initialFormData = {
    apid: '',
    docname: '',
    spl: '',
   
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
        formData.apid === '' ||
        formData.docname === '' ||
        formData.spl === ''
      ) {
        setError('Please enter all fields.');
        setSuccess('');
        return;
      }

      // Clear previous error and success messages
      setError('');
      setSuccess('');

      const response = await axios.post('http://127.0.0.1:8080/addAppointment', formData);
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
        <h2>Add Appointment Details</h2>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <label>Appointment ID</label>
        <input name="apid" onChange={handleChange} type="text" value={formData.apid} />
        <br />
        <label>Doctor Name</label>
        <input name="docname" onChange={handleChange} type="text" value={formData.docname} />
        <br />
        <label>Specialist</label>
        <input name="spl" onChange={handleChange} type="text" value={formData.spl} />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default AddAppointment;
