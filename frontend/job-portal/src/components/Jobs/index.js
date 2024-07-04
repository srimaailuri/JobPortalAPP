import React, { useState } from 'react';
import './index.css'; // Ensure you have appropriate CSS for styling

const jobsData = [
  { title: 'Full Stack Backend Developer', company: 'Envato', location: '2023 Willshire Glen, GA-30009', salary: '$5000 - $8000', type: 'Full Time', logo: 'https://indosystem.com/wp-content/uploads/2016/03/uiux.png' },
  { title: 'Product UI & UX Expert', company: 'Astha', location: '2023 Willshire Glen, GA-30009', salary: '$7000 - $13000', type: 'Part Time', logo: 'https://indosystem.com/wp-content/uploads/2016/03/uiux.png' },
  { title: 'Full Stack Backend Developer', company: 'Github', location: '2023 Willshire Glen, GA-30009', salary: '$5000 - $8000', type: 'Freelance', logo: 'https://indosystem.com/wp-content/uploads/2016/03/uiux.png' },
  { title: 'Product UI & UX Expert', company: 'Medicore', location: '2023 Willshire Glen, GA-30009', salary: '$7000 - $13000', type: 'Full Time', logo: 'https://indosystem.com/wp-content/uploads/2016/03/uiux.png' },
  { title: 'Full Stack Backend Developer', company: 'GreenSoul', location: '2023 Willshire Glen, GA-30009', salary: '$5000 - $8000', type: 'Full Time', logo: 'https://indosystem.com/wp-content/uploads/2016/03/uiux.png' },
  { title: 'Full Stack Backend Developer', company: 'HM Foundation', location: '2023 Willshire Glen, GA-30009', salary: '$5000 - $8000', type: 'Full Time', logo: 'https://indosystem.com/wp-content/uploads/2016/03/uiux.png' },
  { title: 'Product UI & UX Expert', company: 'Insuras', location: '2023 Willshire Glen, GA-30009', salary: '$7000 - $13000', type: 'Part Time', logo: 'https://indosystem.com/wp-content/uploads/2016/03/uiux.png' },
  { title: 'Full Stack Backend Developer', company: 'Dhub', location: '2023 Willshire Glen, GA-30009', salary: '$5000 - $8000', type: 'Freelance', logo: 'https://indosystem.com/wp-content/uploads/2016/03/uiux.png' },
  { title: 'Product UI & UX Expert', company: 'Biddanondo', location: '2023 Willshire Glen, GA-30009', salary: '$7000 - $13000', type: 'Full Time', logo: 'https://indosystem.com/wp-content/uploads/2016/03/uiux.png' },
];

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <img src={job.logo} alt={`${job.company} logo`} />
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.salary}</p>
      <span className={`job-type ${job.type.toLowerCase().replace(' ', '-')}`}>{job.type}</span>
    </div>
  );
};

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = jobsData.filter(job => 
      job.title.toLowerCase().includes(query) || job.company.toLowerCase().includes(query)
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="jobs-page">
      <h1>Job Listings</h1>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search Jobs..." 
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="job-list">
        {filteredJobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
