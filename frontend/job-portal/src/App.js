import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Companies from './components/companies';
import Blogs from './components/Blogs';
import NotFound from './components/NotFound';
import './App.css';

const App = () => {
  const location = useLocation();
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (location.pathname === '/register') {
      setIsFlipped(true);
    } else {
      setIsFlipped(false);
    }
  }, [location]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <Navbar />
      <div className="main-wrapper">
        <div className={`card-container ${isFlipped ? 'rotate' : ''}`}>
          <div className="card">
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login onFlip={handleFlip} />} />
              <Route path="/home" element={<Home />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/register" element={<Register onFlip={handleFlip} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


