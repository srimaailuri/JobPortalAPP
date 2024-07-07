import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import './index.css';
import JobCard from '../JobCard';
import Navbar from '../Navbar';

const Home = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [jobs, setJobs] = useState([]);
  const [filteredjobs,setFilteredJobs]=useState([]);
  const jwtToken = Cookies.get('jwt_token');

  const fetchJobs = async (jobTitle = '', location = '') => {
    try {
      const response = await axios.get('http://localhost:3001/jobs');
      console.log(response.data.query_result[0]);
      setJobs(response.data.query_result[0]);
      setFilteredJobs(response.data.query_result[0]);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setJobs([]); 
      setFilteredJobs([]);
    }
  };

  // Fetch jobs when the component mounts
  useEffect(() => {
    fetchJobs();
  }, []);

  const handleSearch = () => {
    const filteredJobs = jobs.filter(
      job =>
        job.JobTitle.toLowerCase().includes(jobTitle.toLowerCase()) &&
        job.Location.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredJobs(filteredJobs);
  };

  if (!jwtToken) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Navbar/>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="hero-container">
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
                <button type='button' className="find-jobs" onClick={handleSearch}>Find Jobs</button>
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
      </div>
      <div className='row'>
        {filteredjobs.length > 0 ? (
          <>
          {filteredjobs.map((job)=> (
          <JobCard key={job.id} eachJob={job}/>
        ))}
        </>
          ) : (
            <p>No jobs found</p>
          )}
      </div>
    </div>
    </div>
  );
};

export default Home;
