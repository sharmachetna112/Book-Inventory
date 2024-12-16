// src/pages/AdminDashboard.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import DashboardCard from '../components/DashboardCard';

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-4 gap-6">
          <DashboardCard title="Total Books" count="1200" />
          <DashboardCard title="Total Authors" count="450" />
          <DashboardCard title="Categories" count="30" />
          <DashboardCard title="Inventory Stock" count="7500" />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
