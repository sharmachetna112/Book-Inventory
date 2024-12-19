// src/components/UserSidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const UserSidebar = () => {
  return (
    <div
      className="d-flex flex-column bg-primary text-white p-4"
      style={{ width: "250px", height: "100vh", position: "fixed" }}
    >
      <h2 className="h4 mb-4">User Panel</h2>
      <nav className="nav flex-column">
        <Link to="/user-books" className="nav-link text-white">
          Books
        </Link>
        <Link to="/user-authors" className="nav-link text-white">
          Authors
        </Link>
        <Link to="/user-users" className="nav-link text-white">
          Users
        </Link>
        <Link to="/user-cart" className="nav-link text-white">
          Shopping Cart
        </Link>
        <Link to="/user-inventory" className="nav-link text-white">
          Inventory
        </Link>
      </nav>
    </div>
  );
};

export default UserSidebar;
