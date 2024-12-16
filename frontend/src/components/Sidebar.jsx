// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-600 text-white flex flex-col h-full p-4">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <nav className="space-y-4">
        <a href="/admin-dashboard" className="hover:text-blue-200">Dashboard</a>
        <a href="/books" className="hover:text-blue-200">Books</a>
        <a href="/authors" className="hover:text-blue-200">Authors</a>
        <a href="/inventory" className="hover:text-blue-200">Inventory</a>
        <a href="/categories" className="hover:text-blue-200">Categories</a>
      </nav>
    </div>
  );
};

export default Sidebar;
