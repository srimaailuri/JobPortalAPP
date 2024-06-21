import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onFlip }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    navigate('/home'); // Assuming /home is a protected route
  };

  return (
    <div className="login-form">
      <div className="header">Log in</div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            <button className="btn btn-submit" type="submit">Log in</button>
          </div>
        </form>
      </div>
      <div className="footer">
        Don't have an account?
        <button className="btn btn-rotate" onClick={() => { onFlip(); navigate('/register'); }}>Sign up</button>
      </div>
    </div>
  );
};

export default Login;
