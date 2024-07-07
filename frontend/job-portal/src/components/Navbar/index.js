import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './Navbar.css';
import Cookies from 'js-cookie';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const Navigate=useNavigate();

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleLogout = () => {
    Cookies.remove('jwt_token');
    Navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-toggle" onClick={handleToggle}>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </div>
        <div className={`navbar-links ${isActive ? 'active' : ''}`}>
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/companies" className="navbar-link">Search by Companies</Link>
          <Link to="/myApplication" className="navbar-link">My Application</Link>
          <Link to="/blogs" className="navbar-link">Blogs</Link>
          <button type="button" className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;











