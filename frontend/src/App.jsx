// src/App.js or src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard'; // Placeholder for admin dashboard
import UserDashboard from './pages/UserDashboard'; // Placeholder for user dashboard

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-login" element={<AdminDashboard />} />
        <Route path="/user-login/*" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
