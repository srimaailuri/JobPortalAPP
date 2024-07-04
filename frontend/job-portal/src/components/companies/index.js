import React, { useState } from 'react';
import './index.css'; // Ensure you have appropriate CSS for styling

const companiesData = [
  { name: 'Envato', openPositions: 2, location: 'Melbourne, Australia', logo: 'https://tse4.mm.bing.net/th?id=OIP.8SVgggxQcO5L6Dw_61ac4QHaEK&pid=Api&P=0&h=180' },
  { name: 'Astha', openPositions: 1, location: 'Dhaka, Bangladesh', logo: 'https://tse4.mm.bing.net/th?id=OIP.8SVgggxQcO5L6Dw_61ac4QHaEK&pid=Api&P=0&h=180' },
  { name: 'Github', openPositions: 4, location: 'San Francisco, USA', logo: 'https://tse4.mm.bing.net/th?id=OIP.8SVgggxQcO5L6Dw_61ac4QHaEK&pid=Api&P=0&h=180' },
  { name: 'Medicore', openPositions: 1, location: 'Los Angeles, USA', logo: 'https://tse4.mm.bing.net/th?id=OIP.8SVgggxQcO5L6Dw_61ac4QHaEK&pid=Api&P=0&h=180' },
  { name: 'Greensoul', openPositions: 1, location: 'Tokyo, Japan', logo: 'https://tse4.mm.bing.net/th?id=OIP.8SVgggxQcO5L6Dw_61ac4QHaEK&pid=Api&P=0&h=180' },
  { name: 'Generous', openPositions: 2, location: 'Osaka, Japan', logo: 'https://tse4.mm.bing.net/th?id=OIP.8SVgggxQcO5L6Dw_61ac4QHaEK&pid=Api&P=0&h=180' },
];

const CompanyCard = ({ company }) => {
  return (
    <div className="company-card">
      <img src={company.logo} alt={`${company.name} logo`} />
      <h3>{company.name}</h3>
      <p>{company.openPositions} open positions</p>
      <p>{company.location}</p>
    </div>
  );
};

const Companies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState(companiesData);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = companiesData.filter(company => 
      company.name.toLowerCase().includes(query)
    );
    setFilteredCompanies(filtered);
  };

  return (
    <div className="companies-page">
      <h1>Company Listings</h1>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search Companies..." 
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="company-list">
        {filteredCompanies.map((company, index) => (
          <CompanyCard key={index} company={company} />
        ))}
      </div>
    </div>
  );
};

export default Companies;

