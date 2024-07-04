import React from 'react';
import './index.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Find The Job That Fits Your Life</h1>
          <p>
            Resume-Library is a true performance-based job board. Enjoy custom
            hiring products and access to up to 10,000 new resume registrations
            daily, with no subscriptions or user licenses.
          </p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Job title, key words or company"
              className="search-input"
            />
            <input
              type="text"
              placeholder="All Location"
              className="search-input"
            />
            <button className="btn find-jobs">Find Jobs</button>
          </div>
          <div className="job-categories">
            <a href="#designer" className="category-link">Designer</a>
            <a href="#developer" className="category-link">Developer</a>
            <a href="#tester" className="category-link">Tester</a>
            <a href="#writing" className="category-link">Writing</a>
            <a href="#projectmanager" className="category-link">Project Manager</a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
