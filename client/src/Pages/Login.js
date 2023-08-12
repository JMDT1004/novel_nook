import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loginStatus, setLoginStatus] = useState('');

  useEffect(() => {
    // Clear login status when component mounts
    setLoginStatus('');
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', formData);
      console.log('Login successful', response.data);
      // Store the received token in localStorage or cookies
      setLoginStatus('Login successful!');
    } catch (error) {
      console.error('Error logging in:', error);
      setLoginStatus('Error logging in. Please check your credentials.');
    }
  };

  return (
    <div>
      <h2>User Login</h2>
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
          <label>Password:</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>{loginStatus}</p>
    </div>
  );
}

export default LoginPage;
