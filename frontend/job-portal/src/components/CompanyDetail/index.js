import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If using axios
import { useParams } from 'react-router-dom';
import JobCard from '../JobCard'
import './index.css'

const CompanyDetail = () => {
  const { name } = useParams();
  const [CompanyDetailjobPosts, setCompanyDetailjobPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCompanyDetailJobPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/company/${name}`);
        setCompanyDetailjobPosts(response.data);
      } catch (error) {
        console.error('Error fetching job posts:', error);
        setError('Error fetching job posts');
      }
    };

    fetchCompanyDetailJobPosts();
  }, [name]);

  return (
    <div className='companyDetail'>
      <h1>Job Posts at {name}</h1>
      {error && <p>{error}</p>}
      {CompanyDetailjobPosts.length > 0 ? (
        <ul>
          {CompanyDetailjobPosts.map((eachjob) => (
            <JobCard key={eachjob.id} eachJob={eachjob}/>
          ))}
        </ul>
      ) : (
        <p>No job posts found for {name}</p>
      )}
    </div>
  );
};

export default CompanyDetail;