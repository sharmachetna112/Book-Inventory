// src/pages/LandingPage.jsx
import React, { useState, useEffect } from "react";
import { SiBookstack } from "react-icons/si"; // Importing the icon
import { useNavigate } from 'react-router-dom'; // For navigation

const LandingPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate(); // Hook for navigating programmatically

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".relative")) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  // Handle login button click
  const handleLogin = (role) => {
    if (role === 'Admin') {
      navigate('/admin-login');
    } else {
      navigate('/user-login');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Overlay for Background */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Header Section */}
      <header className="w-full bg-black bg-opacity-70 shadow-md py-4 fixed top-0 left-0 right-0 z-20">
        <div className="container h-12 mx-auto flex justify-between items-center px-4">
          {/* Logo with Icon and Name */}
          <div className="flex items-center space-x-2">
            <SiBookstack className="text-white text-3xl" /> {/* Icon */}
            <h1 className="text-2xl font-bold text-white">BookTrack</h1> {/* Name */}
          </div>
          <nav className="space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white text-xl p-4">
              Home
            </a>
            <a href="#features" className="text-gray-300 hover:text-white text-xl p-4">
              Features
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white text-xl p-4">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="relative flex-1 flex flex-col text-white z-10">
        {/* Welcome Section */}
        <section
          id="home"
          className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
          }}
        >
          <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
            <h2 className="text-5xl font-bold mb-4">Welcome to Book Inventory System</h2>
            <p className="text-lg mb-8">
              Manage your library, bookstore, or collection effortlessly.
            </p>
            <div className="relative">
              {/* Login Button */}
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Login
              </button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute mt-2 right-0 bg-white shadow-lg rounded-lg py-2 text-black">
                  <a
                    href="#"
                    className="block px-6 py-2 hover:bg-gray-100"
                    onClick={() => handleLogin('Admin')}
                  >
                    Admin Login
                  </a>
                  <a
                    href="#"
                    className="block px-6 py-2 hover:bg-gray-100"
                    onClick={() => handleLogin('User')}
                  >
                    User Login
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-gray-100 py-20 px-8 pb-32">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Our Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Real-time Inventory */}
              <div className="p-8 bg-white shadow-xl rounded-lg hover:scale-105 transform transition-all duration-300">
                <h3 className="text-2xl font-semibold text-blue-600 mb-6">Real-time Inventory</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Track your inventory in real time across all devices. Receive updates instantly for better control.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Instant updates on stock changes</li>
                  <li>View current stock levels anytime</li>
                  <li>Real-time syncing between devices</li>
                </ul>
              </div>
              {/* Detailed Reporting */}
              <div className="p-8 bg-white shadow-xl rounded-lg hover:scale-105 transform transition-all duration-300">
                <h3 className="text-2xl font-semibold text-green-600 mb-6">Detailed Reporting</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Generate insightful reports that help you analyze sales, inventory turnover, and user activities.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Sales performance analysis</li>
                  <li>Inventory turnover insights</li>
                  <li>Export reports to CSV</li>
                </ul>
              </div>
              {/* User Management */}
              <div className="p-8 bg-white shadow-xl rounded-lg hover:scale-105 transform transition-all duration-300">
                <h3 className="text-2xl font-semibold text-red-600 mb-6">User Management</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Effortlessly manage users with customizable roles and permissions for different levels of access.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Create and manage user profiles</li>
                  <li>Assign roles and permissions</li>
                  <li>Monitor user activity</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gradient-to-r from-blue-500 to-teal-500 py-20 px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-extrabold mb-8">Get In Touch</h2>
            <p className="text-lg mb-6">
              Need assistance or have questions? Our support team is ready to help.
            </p>
            <div className="mb-8">
              <p className="text-xl font-semibold mb-4">Email:</p>
              <p className="text-lg">support@bookinventory.com</p>
            </div>
            <div className="mb-8">
              <p className="text-xl font-semibold mb-4">Phone:</p>
              <p className="text-lg">+1 (555) 123-4567</p>
            </div>
            <div className="space-x-4">
              <a
                href="mailto:support@bookinventory.com"
                className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all duration-300"
              >
                Email Us
              </a>
              <a
                href="tel:+15551234567"
                className="px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-all duration-300"
              >
                Call Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
