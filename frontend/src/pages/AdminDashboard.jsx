// src/pages/AdminDashboard.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

const AdminDashboard = () => {
  // Admin Links
  const adminLinks = [
    { name: "Dashboard", path: "/admin-dashboard" },
    { name: "Books", path: "/books" },
    { name: "Authors", path: "/authors" },
    { name: "Categories", path: "/categories" },
    { name: "Inventory", path: "/inventory" },
  ];

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <Sidebar links={adminLinks} role="Admin" />

      {/* Main Content */}
      <main
        className="flex-grow-1 bg-light p-4"
        style={{ marginLeft: "250px" }}
      >
        <h1 className="mb-4">Admin Dashboard</h1>

        {/* Dashboard Cards */}
        <div className="row g-4">
          <div className="col-md-3">
            <DashboardCard title="Total Books" count="1200" />
          </div>
          <div className="col-md-3">
            <DashboardCard title="Total Authors" count="450" />
          </div>
          <div className="col-md-3">
            <DashboardCard title="Categories" count="30" />
          </div>
          <div className="col-md-3">
            <DashboardCard title="Inventory Stock" count="7500" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
