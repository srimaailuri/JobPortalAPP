// ApplicationsPage.js
import React, { useContext } from 'react';
import './index.css';
import { AppContext } from '../AppContext';

const MyApplication = () => {
  const { appliedJobIds } = useContext(AppContext);

  // Here you can fetch jobs from an API or use a hardcoded list
  const jobs = [
    {
      id: 1,
      JobTitle: "Software Engineer",
      Company: "TechNova Solutions",
      Location: "Remote",
      salary: 120000,
      jobtype: "Full-time",
      skills: "React, Node.js, Python",
      JobUrl: "https://www.technova-solutions.com/careers/software-engineer",
      Summary: "We are seeking a talented and motivated Software Engineer to join our dynamic team at TechNova Solutions..."
    },
    // Add other jobs here
  ];

  // Filter jobs based on appliedJobIds
  const filteredJobs = jobs.filter(job => appliedJobIds.includes(job.id));

  return (
    <div>
      <h2>My Applications</h2>
      {filteredJobs.map(job => (
        <div key={job.id} className="job-overview">
          <h3>Job Title: {job.JobTitle}</h3>
          <p>Company: {job.Company}</p>
          <p>Location: {job.Location}</p>
          <p>Salary: ${job.salary}</p>
          <p>Job Type: {job.jobtype}</p>
          <p>Skills: {job.skills}</p>
          <p>Company URL: {job.JobUrl}</p>
          <p>Summary: {job.Summary}</p>
        </div>
      ))}
    </div>
  );
};

export default MyApplication;
