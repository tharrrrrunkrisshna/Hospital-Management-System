import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const backgrounds = [
  'https://cdn.wallpapersafari.com/46/70/fjGlXJ.jpg',
  'https://wallpapers.com/images/featured/healthcare-oco8w27tkw40cp90.jpg',
  'https://healthwire.pk/wp-content/uploads/2021/03/shutterstock_1085068571.jpg',
];

const titles = [
  'Welcome to Hospital Management System',
  'Your Partner in Healthcare Services',
  'Manage Patients, Appointments, and Records Efficiently',
  'Connect with Our Healthcare Professionals',
];

function Homepage() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundIndex((backgroundIndex) => (backgroundIndex + 1) % backgrounds.length);
      setTitleIndex((titleIndex) => (titleIndex + 1) % titles.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="homenew">
      <div className="navbarnew">
        <div className="logonew">
          <Link to="/">HOSPITAL</Link>
        </div>
        <div className="lognew">
  <Link to="/Login" className="button-link">
    <button className="button-style">Login</button>
  </Link>
  {/* Use <Link> to navigate to Mainpage */}
</div>

      </div>
      <div
        className="backgroundnew"
        style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}
      />
      <div className="title-containernew">
        <h1 className="titlenew">{titles[titleIndex]}</h1>
      </div>
    </div>
  );
}

export default Homepage;
