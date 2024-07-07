import React from 'react';
import {Link} from 'react-router-dom';
import './index.css'; // Add your CSS styling here

const JobCard = ({ eachJob }) => {
  return (
    <Link to={`/jobDetails/${eachJob.id}`} className="job-card">
      <div className="job-card-left">
        <h3 >{eachJob.JobTitle} - {eachJob.Company}</h3>
        <p>{eachJob.jobtype}  • {eachJob.Location}</p>
        <div className="job-skills">
          {eachJob.skills}
        </div>
      </div>
      <div className="job-card-right">
        <p>{eachJob.PostDate}</p>
        <button className="apply-button">Apply</button>
      </div>
  </Link>
  );
};

export default JobCard;
