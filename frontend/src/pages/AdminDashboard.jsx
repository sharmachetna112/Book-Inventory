// src/pages/AdminDashboard.jsx
import React from "react";
import AdminSidebar from "../components/dashboard/AdminSidebar";
import Navbar from "../components/dashboard/Navbar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div
        className="flex-grow-1 bg-light"
        style={{ marginLeft: "16rem", minHeight: "100vh" }}
      >
        {/* Navbar */}
        <div
          className="top-0 w-100"
          style={{ height: "4.1rem", position: "fixed", zIndex: 1 }}
        >
          <Navbar />
        </div>

        {/* Render the content of the selected route */}
        <div
          className="p-4"
          style={{
            marginTop: "4.1rem", // Offset the height of the fixed navbar
            height: "calc(100vh - 4.1rem)", // Content area height minus navbar height
            overflowY: "auto",
          }}
        >
          <Outlet /> {/* Dynamically renders the active child route's content */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;





// import React from "react";
// import Sidebar from "../components/Sidebar";
// import DashboardCard from "../components/DashboardCard";

// const AdminDashboard = () => {
//   // Admin Links
//   const adminLinks = [
//     { name: "Dashboard", path: "/admin-dashboard" },
//     { name: "Books", path: "/books" },
//     { name: "Authors", path: "/authors" },
//     { name: "Categories", path: "/categories" },
//     { name: "Inventory", path: "/inventory" },
//   ];

//   return (
//     <div className="d-flex vh-100">
//       {/* Sidebar */}
//       <Sidebar links={adminLinks} role="Admin" />

//       {/* Main Content */}
//       <main
//         className="flex-grow-1 bg-light p-4"
//         style={{ marginLeft: "250px" }}
//       >
//         <h1 className="mb-4">Admin Dashboard</h1>

//         {/* Dashboard Cards */}
//         <div className="row g-4">
//           <div className="col-md-3">
//             <DashboardCard title="Total Books" count="1200" />
//           </div>
//           <div className="col-md-3">
//             <DashboardCard title="Total Authors" count="450" />
//           </div>
//           <div className="col-md-3">
//             <DashboardCard title="Categories" count="30" />
//           </div>
//           <div className="col-md-3">
//             <DashboardCard title="Inventory Stock" count="7500" />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;
