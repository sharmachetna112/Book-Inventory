// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const LoginPage = () => {
  const [role, setRole] = useState('User');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigating programmatically

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your logic for validating email and password here, e.g., checking against an API

    if (role === 'Admin') {
      // Redirect to Admin dashboard
      navigate('/admin-dashboard');
    } else {
      // Redirect to User dashboard
      navigate('/user-dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Role Selection */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Role</label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* Sign up link */}
        <p className="mt-4 text-center text-gray-600">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
