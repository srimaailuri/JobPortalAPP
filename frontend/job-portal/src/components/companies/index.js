import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If using axios
import './index.css'; 
import Navbar from '../Navbar';
import CompanyCard from '../CompanyCard';

const Companies = () => {
  const [searchCompany, setSearchCompany] = useState('');
  const [allCompanies,setallCompanies]=useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  const fetchCompanies = async () => {
    try {
      const response = await axios.get('http://localhost:3001/companies'); // Replace with your API endpoint
      setallCompanies(response.data.results[0]);
      setFilteredCompanies(response.data.results[0]);
      console.log(response.data.results[0]);
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchCompany(query);
    const filtered = allCompanies.filter(eachCompany => 
      eachCompany.Company.toLowerCase().includes(query)
    );
    setFilteredCompanies(filtered);
  };

  return (
    <div>
      <Navbar/>
      <div className="companies-page">
        <h1>Company Listings</h1>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search Companies..." 
            value={searchCompany}
            onChange={handleSearch}
          />
        </div>
        <div className="company-list">
          {setFilteredCompanies.length > 0 ? (
            <>
            {filteredCompanies.map((eachCompany,index) => (
              <CompanyCard key={index} eachCompany={eachCompany} />
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

export default Companies;

