// AppContext.js
import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [appliedJobIds, setAppliedJobIds] = useState(() => {
    const storedIds = localStorage.getItem('appliedJobIds');
    return storedIds ? JSON.parse(storedIds) : [];
  });

  useEffect(() => {
    localStorage.setItem('appliedJobIds', JSON.stringify(appliedJobIds));
  }, [appliedJobIds]);

  const addAppliedJobId = (jobId) => {
    if (!appliedJobIds.includes(jobId)) {
      setAppliedJobIds([...appliedJobIds, jobId]);
    }
  };

  const removeAppliedJobId = (jobId) => {
    setAppliedJobIds(appliedJobIds.filter(id => id !== String(jobId)));
  };


  return (
    <AppContext.Provider value={{ appliedJobIds, addAppliedJobId ,removeAppliedJobId}}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };


