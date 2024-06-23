import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/home" className="navbar-brand">Logo</Link>
        <div className="navbar-links">
          <Link to="/home" className="navbar-link">Home</Link>
          <Link to="/jobs" className="navbar-link">Search by Jobs</Link>
          <Link to="/companies" className="navbar-link">Search by Companies</Link>
          <Link to="/blogs" className="navbar-link">Blogs</Link>
          <button onClick={handleLogout} className="navbar-link logout-button">Logout</button>
        </div>
        <div className="navbar-toggle">
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

