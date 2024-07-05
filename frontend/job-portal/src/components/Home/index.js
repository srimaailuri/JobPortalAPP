import React, { useState } from 'react';
import './index.css';

const Home = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [jobs, setJobs] = useState([]);

  const handleSearch = () => {
    // Simulating job search results. Replace this with your actual data fetching logic.
    console.log("clicked");
    const allJobs = [
      { title: 'Python Developer', location: 'New York', description: 'Job description 1' },
      { title: 'Frontend Developer', location: 'San Francisco', description: 'Job description 2' },
      { title: 'Backend Developer', location: 'New York', description: 'Job description 3' },
      { title: 'Backend Developer', location: 'New York', description: 'Job description 4' }
      // Add more jobs as needed
    ];

    const filteredJobs = allJobs.filter(
      job => job.title.toLowerCase().includes(jobTitle.toLowerCase()) &&
             job.location.toLowerCase().includes(location.toLowerCase())
    );

    setJobs(filteredJobs);
  };

  return (
    <div className="container">
      <div class="row">
        <div class="col-12">
           
      <div className="hero-container">
        <div className='hero-content'>
            <h1>Find The Job That Fits Your Life</h1>
            <p>
               Resume-Library is a true performance-based job board. Enjoy custom
               hiring products and access to up to 10,000 new resume registrations
               daily, with no subscriptions or user licenses.
            </p>
            <div className="search-bar">
                <input
                type="text"
                placeholder="Job title"
                className="search-input"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="All Location"
                className="search-input"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button className="btn find-jobs" onClick={handleSearch}>Find Jobs</button>
           </div>
            <div className="job-categories">
              <a href="#designer" className="category-link">Designer</a>
              <a href="#developer" className="category-link">Developer</a>
              <a href="#tester" className="category-link">Tester</a>
              <a href="#writing" className="category-link">Writing</a>
              <a href="#projectmanager" className="category-link">Project Manager</a>
            </div>
        </div>
        </div>
      </div>
      <div className="job-results">
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <div key={index} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.location}</p>
              <p>{job.description}</p>
            </div>
          ))
        ) : (
          <p>No jobs found</p>
        )}
        </div>
      </div>
    </div>
  );
};

export default Home;

