// JobDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import JobDescription from '../JobDescription';
import { AppContext } from '../AppContext';
import './index.css'; 

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState('');


  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/jobDetails/${id}`);
        setJob(response.data[0]);
        console.log(response.data[0]);
      } catch (error) {
        console.error('Error fetching job details:', error);
        setError('Error fetching job details');
      }
    };

    fetchJob();
  }, [id]);

  const { addAppliedJobId } = React.useContext(AppContext);

  const handleApply = () => {
    addAppliedJobId(id);
    alert("added Successfully");
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className="job-detail-container">
                <div className='another-container'>
                <div className="job-header">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.8SVgggxQcO5L6Dw_61ac4QHaEK&pid=Api&P=0&h=180" alt="logo" className="company-logo d-none d-md-inline" />
                    <div className="job-title">
                    <h1>{job.JobTitle}</h1>
                    <p>{job.Company} <br /> {job.Location}</p>
                    </div>
                    <div >
                    <p className="salary">${job.salary}</p>
                    <p className='job-type'>{job.jobtype}</p>
                    </div>
                </div>
                <div>
                    <h2>Job Description: Software Engineer</h2>
                    <h3>Job Title:</h3> 
                    <p>{job.JobTitle}</p>
                    <h3>Location:</h3> 
                    <p>{job.Location}</p>
                    <h3>Company:</h3> 
                    <p>{job.Company}</p>
                </div>
                <JobDescription/>
                <div className="job-overview">
                    <h2>Job Overview</h2>
                    <ul >
                        <li>Job Title: {job.JobTitle}</li>
                        <li>Company: {job.Company}</li>
                        <li>Location: {job.Location}</li>
                        <li>salary: ${job.salary}</li>
                        <li>Job Type: {job.jobtype}</li>
                        <li>Skills :{job.skills}</li>
                        <li className="job-url">Company url: {job.JobUrl}</li>
                        <li>Summary:{job.Summary}</li>
                    </ul>
                    <button onClick={handleApply} className='apply-button'>Apply</button>
                </div>
                </div>
            </div>
       </div>
    </div>
  );
};

export default JobDetail;
