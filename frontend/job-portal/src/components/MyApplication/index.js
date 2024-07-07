import React, { useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css'; 
import axios from 'axios';
import Navbar from '../Navbar';
import { AppContext } from '../AppContext'; 

const ApplicationsPage = () => {
  const { appliedJobIds, removeAppliedJobId } = useContext(AppContext);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const jwtToken = Cookies.get('jwt_token');

  // Fetch jobs when the component mounts
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:3001/jobs');
        setJobs(response.data.query_result[0]); 
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setJobs([]); 
      }
    };

    fetchJobs();
  }, []);

  // Filter jobs based on appliedJobIds whenever jobs or appliedJobIds change
  useEffect(() => {
    const filtered = jobs.filter(job => appliedJobIds.includes(String(job.id)));
    setFilteredJobs(filtered);
  }, [jobs, appliedJobIds]);

  // Handle job deletion
  const handleDelete = (jobId) => {
    removeAppliedJobId(jobId);
  };

  if (!jwtToken) {
    return <Navigate to="/login" />;
  }

  return (
    <div className='container'>
      <Navbar/>
      <div className="applications-page">
        <h1>My Applications</h1>
        {filteredJobs.length === 0 ? (
            <div className='no-app-div'>
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png" className='no-app-img' alt="no-search"/>
                <p>No applications</p>
            </div>
        ) : (
          <div className="job-cards">
            {filteredJobs.map(job => (
              <div key={job.id} className="my-app-job-card">
                <h3>{job.JobTitle}</h3>
                <p>Company: {job.Company}</p>
                <p>Location: {job.Location}</p>
                <p>Salary: ${job.salary}</p>
                <p>Job Type: {job.jobtype}</p>
                <p>Skills: {job.skills}</p>
                <p>Company URL: <a href={job.JobUrl} className='job_url'>{job.JobUrl}</a></p>
                <p>Summary: {job.Summary}</p>
                <button onClick={() => handleDelete(job.id)} >Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationsPage;

