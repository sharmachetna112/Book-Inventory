// src/components/dashboard/AdminSummary.jsx

import React from 'react';
import SummaryCard from './SummaryCard';
import { FaBuilding, FaUser } from 'react-icons/fa';

const AdminSummary = () => {
  return (
    <div className="p-4">
      <h3 className="h3 mb-4">Dashboard Overview</h3>
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-3">
          <SummaryCard 
            icon={<FaUser />} 
            iconBgColor="bg-primary" 
            text="Total Books" 
            number={13} 
          />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <SummaryCard 
            icon={<FaBuilding />} 
            iconBgColor="bg-success" 
            text="Total Authors" 
            number={5} 
          />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <SummaryCard 
            icon={<FaUser />} 
            iconBgColor="bg-warning" 
            text="Categories" 
            number={3} 
          />
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <SummaryCard 
            icon={<FaUser />} 
            iconBgColor="bg-danger" 
            text="Inventory Stocks" 
            number={7} 
          />
        </div>
      </div>
    </div>
  );
};

export default AdminSummary;
