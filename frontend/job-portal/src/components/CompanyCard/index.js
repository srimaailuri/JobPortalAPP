import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const CompanyCard = ({ eachCompany }) => {
  return (
    <Link to={`/company/${eachCompany.Company}`} className="company-card">
      <img src="https://tse4.mm.bing.net/th?id=OIP.8SVgggxQcO5L6Dw_61ac4QHaEK&pid=Api&P=0&h=180" alt="logo" />
      <h3>{eachCompany.Company}</h3>
      <p>{eachCompany.job_count} open positions</p>
      <p>{eachCompany.Location}</p>
    </Link>
  );
};

export default CompanyCard;
