import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [registrationStatus, setRegistrationStatus] = useState('');
  const [registrationError, setRegistrationError] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setRegistrationError('');

    try {
        // Check if username/email already exist
        const registrationCheck = await axios.post('/api/check-registration', {
          email: formData.email,
          username: formData.username
        });
  
        if (registrationCheck.data.email) {
          setRegistrationError('Email already exists');
          return;
        }
  
        if (registrationCheck.data.username) {
          setRegistrationError('Username already exists');
          return;
        }
  
        // If username and email are available, Proceed
        const response = await axios.post('/api/register', formData);
        console.log('Registration successful', response.data);
        setRegistrationStatus('Registration successful');
      } catch (error) {
        console.error('Error registering:', error);
        setRegistrationStatus('Error registering');
      }
    };

  return (
    <div>
      <h2>Registration Page</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {registrationError && <p>{registrationError}</p>}
      <p>{registrationStatus}</p>
    </div>
  );
}

export default Register;
