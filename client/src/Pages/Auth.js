import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm({ handleInputChange, handleSubmit, errorMessage, formData }) {
  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <p>{errorMessage}</p>}
      <input
        onChange={handleInputChange}
        name="email"
        type="email"
        value={formData.email}
        placeholder="Enter your email"
      />
      <input
        onChange={handleInputChange}
        name="password"
        type="password"
        value={formData.password}
        placeholder="Enter your password"
      />
      <button>Log In</button>
    </form>
  );
}

function RegisterForm({ handleInputChange, handleSubmit, errorMessage, formData }) {
  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <p>{errorMessage}</p>}
      <input
        onChange={handleInputChange}
        name="username"
        type="text"
        value={formData.username}
        placeholder="Enter your Username"
      />
      <input
        onChange={handleInputChange}
        name="email"
        type="email"
        value={formData.email}
        placeholder="Enter your email"
      />
      <input
        onChange={handleInputChange}
        name="password"
        type="password"
        value={formData.password}
        placeholder="Enter your password"
      />
      <button>Register</button>
    </form>
  );
}

function AuthForm(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    isLogin: true
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = e => {
    const prop = e.target.name;
    const value = e.target.value;

    if (prop === 'isLogin') {
      setFormData({
        ...formData,
        isLogin: value === 'login' ? true : false
      });
    } else {
      setFormData({
        ...formData,
        [prop]: value
      });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const url = formData.isLogin ? '/api/login' : '/api/register';
    try {
      const res = await axios.post(url, formData);


      props.setState(oldState => {
        return {
          ...oldState,
          user: res?.data?.user
        };
      });
      setErrorMessage('');
      setFormData({
        username: '',
        email: '',
        password: '',
        isLogin: true
      });

      navigate('/dashboard');
    } catch (err) {
      setErrorMessage(err.response?.data.message);
    }
  };

  return (
    <>
    <h1>{formData.isLogin ? 'Log In' : 'Register'}</h1>
    {formData.isLogin ? (
      <LoginForm
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
        formData={formData}
      />
    ) : (
      <RegisterForm
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
        formData={formData}
      />
    )}
    <div>
      <label htmlFor="login">Login</label>
      <input
        name="isLogin"
        onChange={handleInputChange}
        type="radio"
        id="login"
        value="login"
        checked={formData.isLogin}
      />
      <label htmlFor="register">Register</label>
      <input
        name="isLogin"
        onChange={handleInputChange}
        type="radio"
        id="register"
        value="register"
        checked={!formData.isLogin}
      />  
    </div>
  </>
  
  );
}

export default AuthForm;


 

