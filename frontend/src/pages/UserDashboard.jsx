// src/pages/UserDashboard.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import BooksSection from "../components/BooksSection";
import AuthorsSection from "../components/AuthorsSection";
import CartSection from "../components/CartSection";
import InventorySection from "../components/InventorySection";

const UserDashboard = () => {
  // Links for the sidebar
  const userLinks = [
    { name: "Books", path: "/user-dashboard/books" },
    { name: "Authors", path: "/user-dashboard/authors" },
    { name: "Shopping Cart", path: "/user-dashboard/cart" },
    { name: "Inventory", path: "/user-dashboard/inventory" },
  ];

  return (
    <div className="vh-100 d-flex flex-column">
      {/* Header Section */}
      <header className="bg-primary text-white d-flex justify-content-between align-items-center px-4 py-3 shadow">
        <h1 className="h5 mb-0">John Doe</h1>
        <div className="d-flex align-items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="rounded-circle me-2"
            style={{ width: "40px", height: "40px" }}
          />
          <span>Profile</span>
        </div>
      </header>

      {/* Main Content with Sidebar */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <Sidebar links={userLinks} role="User" />

        {/* Nested Routes */}
        <main className="flex-grow-1 bg-light p-4" style={{ marginLeft: "250px" }}>
          <Routes>
            <Route path="/" element={<BooksSection />} />
            <Route path="/books" element={<BooksSection />} />
            <Route path="/authors" element={<AuthorsSection />} />
            <Route path="/cart" element={<CartSection />} />
            <Route path="/inventory" element={<InventorySection />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
