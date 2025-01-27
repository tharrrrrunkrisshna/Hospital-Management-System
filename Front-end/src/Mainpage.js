import React, { Component } from 'react';
import { Container, Nav, Navbar, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
class Mainpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'HOSPITAL',
      message1: '',
    };
  }

  render() {
    const navbarStyles = {
      maxWidth: '1168px', // Set your desired maximum width here
    };
    return (
      <center>
        <div className='Cartop'>
          <h1 className='logos'>{this.state.message}</h1>
          
          <Navbar bg='dark' variant='dark' style={navbarStyles}>
            <Container>
              <Link to='/' className='navbar-brand'>
                Home
              </Link>
              <Nav className='me-auto'>
                <Link to='/Patients' className='nav-linknq'>
                  Patients
                </Link>
                <Link to='/Appointment' className='nav-linknq'>
                  Appointments
                </Link>
                <Link to='/About' className='nav-linknq'>
                  About
                </Link>
                <Link to='/Contact' className='nav-linknq'>
                  Contact
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
        <div className='navigation-bgn'>
          <Card className='bg-dark text-white border-0'>
            <Card.Img
              src='https://hatiintl.com/wp-content/uploads/2017/01/The-integrations-that-matter-for-a-Hospital-Management-System.jpg'
              className='card-img'
              alt='Background'
              height='550px'
            />
            <Card.ImgOverlay>
              <div className='containern'></div>
              <Card.Title>
                <h1>
                  <b>Welcome to Our Hospital Management System!!</b>
                </h1>
              </Card.Title>
              <Card.Text>
                <h3>Explore our healthcare services and manage your records efficiently.</h3>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      </center>
    );
  }
}

export default Mainpage;
