import React from 'react';
import Card from 'react-bootstrap/Card'; // Import Card component
import './About.css'; // Import CSS file for styling

function About() {
  return (
    <div className="about-container">
      <Card className="about-card">
        <Card.Body>
          <div className="about-header">
            <h1 className="about-title">About</h1>
            <p className="about-subtitle">Your Partner in Quality Healthcare</p>
          </div>
          <div className="about-content">
            <p className="about-text">
              At Hospital Management System, we are dedicated to providing you with efficient healthcare services and
              helping you manage patient records, appointments, and more.
            </p>
            <p className="about-text">
              Our team of highly skilled healthcare professionals is committed to delivering the highest quality care
              and ensuring that your experience with our system is seamless and effective.
            </p>
            <div className="about-address">
              <p className="about-address-title">Hospital Address:</p>
              <p className="about-address-text">
                123 Main Street,
                <br />
                City, State, ZIP Code
              </p>
            </div>
          </div>
          <div className="about-contact">
            <p className="about-text">
              If you have any questions or need assistance, please don't hesitate to contact us. We are here to serve
              you.
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
