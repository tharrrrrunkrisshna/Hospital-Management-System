import React from 'react';
import './Contact.css'; // Import your CSS file for styling

function Contact() {
  return (
    <div className="contact-card">
      <div className="cd">
      <h1 >Contact Us</h1>
    </div>
      <p>If you have any questions or need assistance, please feel free to contact us:</p>
      <div className="contact-info">
        <div className="contact-item">
          <h2>Email</h2>
          <p>info@hospital.com</p>
        </div>
        <div className="contact-item">
          <h2>Phone</h2>
          <p>+1 (123) 456-7890</p>
        </div>
        <div className="contact-item">
          <h2>Address</h2>
          <p>123 Hospital Way, City, Country</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
