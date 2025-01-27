import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Home from './Home';
import Mainpage from './Mainpage';
import About from './About';
import Login from './Login';
// import AddDoctor from './POST/AddDoctor';
import Addpatient from './POST/Addpatient';
import AddAppointment from './POST/AddAppointment';
import DeletePatient from './DEL/DeletePatient';
import DeleteAppointment from './DEL/DeleteAppointment';
// import DeleteDoctor from './DEL/DeleteDoctor';
// import UpdateDoctor from './PUT/UpdateDoctor';
import UpdatePatient from './PUT/UpdatePatient';
import UpdateAppointment from './PUT/UpdateAppointment';
// import GetdataDoctor from './GET/GetdataDoctor';
import GetdataPatient from './GET/GetdataPatient';
import GetdataAppointment from './GET/GetdataAppointment';
import Patients from './Patients';
import Contact from './Contact';
import Appointment from './Appointment';
// import Doctor from './Doctor';
ReactDOM.render(
  <Router>
    <Routes> {/* Use Routes instead of Switch */}
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Mainpage" element={<Mainpage />} />
      <Route path="/about" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Patients" element={<Patients />} />
      <Route path="/Appointment" element={<Appointment />} />
      <Route path="/GetdataPatient" element={<GetdataPatient />} />
     < Route path="/GetdataAppointment" element={<GetdataAppointment />} />
      <Route path="/Addpatient" element={<Addpatient />} />
      <Route path="/AddAppointment" element={<AddAppointment />} />
      <Route path="/DeletePatient" element={<DeletePatient />} />
      <Route path="/DeleteAppointment" element={<DeleteAppointment />} />
      <Route path="/UpdatePatient" element={<UpdatePatient />} />
      <Route path="/UpdateAppointment" element={<UpdateAppointment />} />
      {/* <Route path="/Doctors" element={<Doctor />} /> */}
      {/* <Route path="/GetdataDoctor" element={<GetdataDoctor />} /> */}
      {/* <Route path="/AddDoctor" element={<AddDoctor />} /> */}
      {/* <Route path="/DeleteDoctor" element={<DeleteDoctor />} />
      <Route path="/UpdateDoctor" element={<UpdateDoctor />} /> */}
    </Routes>
  </Router>,
  

  document.getElementById('root')
);
