import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ onFlip }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3001/login',
        { email, password },
        { withCredentials: true } // Send cookies along with the request
      );

      console.log('Login response:', response.data);
      navigate('/home'); // Redirect to home page after successful login
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error: show error message or redirect to error page
    }
  };

  return (
    <div className="login-form">
      <div className="header">Log in</div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-field">
            <button className="btn btn-submit" type="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
      <div className="footer">
        Don't have an account?
        <button
          className="btn btn-rotate"
          onClick={() => {
            onFlip();
            navigate('/register');
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;

