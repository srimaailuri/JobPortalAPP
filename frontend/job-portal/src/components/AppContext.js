// AppContext.js
import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [appliedJobIds, setAppliedJobIds] = useState([]);

  const addAppliedJobId = (jobId) => {
    if (!appliedJobIds.includes(jobId)) {
      setAppliedJobIds([...appliedJobIds, jobId]);
    }
  };

  return (
    <AppContext.Provider value={{ appliedJobIds, addAppliedJobId }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
