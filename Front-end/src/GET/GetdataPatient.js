import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Getdata.css'; // Import the new CSS file

export default function GetDataComponent() {

  const [details, setDetails] = useState([]);

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    axios.get('http://127.0.0.1:8080/showpdetails')
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className='containergd'>
      <div className='card-containergd'>
        <h1 className='text-center'>Patient Details</h1>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>PatientID</th>
            </tr>
          </thead>
          <tbody>
            {details.map((bk) => (
              <tr key={bk.patient}>
                <td>{bk.username}</td>
                <td>{bk.password}</td>
                <td>{bk.firstname}</td>
                <td>{bk.gender}</td>
                <td>{bk.email}</td>
                <td>{bk.patient_ID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
