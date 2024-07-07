import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/Login';
import RegisterForm from './components/Register';
import Home from './components/Home';
import Companies from './components/companies';
import CompanyDetail from './components/CompanyDetail'
import JobDetail from './components/JobDetails'
import MyApplication from './components/MyApplication';
import Blogs from './components/Blogs';
import { AppProvider } from './components/AppContext';


function App() {
  return (
    <AppProvider>
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/" element={<Home/>} />
      <Route path="/companies" element={< Companies/>} />
      <Route path="/company/:name" element={<CompanyDetail/>} />
      <Route path="/jobDetails/:id" element={<JobDetail/>} />
      <Route path="/myApplication" element={<MyApplication />} />
      <Route path="/blogs" element={<Blogs/>} />
    </Routes>
    </AppProvider>
  );
}

export default App;