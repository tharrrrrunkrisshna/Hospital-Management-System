import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Getdata.css'; // Import the new CSS file

export default function GetDataComponent() {

  const [details, setDetails] = useState([]);

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    axios.get('http://127.0.0.1:8080/showadetails')
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
        <h1 className='text-center'>Appointment Details</h1>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Appointment ID</th>
              <th>Doctor Name</th>
              <th>Specialists</th>
            </tr>
          </thead>
          <tbody>
            {details.map((bk) => (
              <tr key={bk.appointment}>
                <td>{bk.apid}</td>
                <td>{bk.docname}</td>
                <td>{bk.spl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
