import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const correctPassword = 'Hos123'; // Replace with your correct password

  const handleLogin = () => {
    if (password === correctPassword) {
      // Redirect to another page if the password is correct
      window.location.href = '/Mainpage'; // Use window.location.href for redirection
    } else {
      setErrorMessage('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Login;
