import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
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
    <div className="main-wrapper">
      <div className={`card-container ${isFlipped ? 'rotate' : ''}`}>
        <div className="card">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login onFlip={handleFlip} />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/register" element={<Register onFlip={handleFlip} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

