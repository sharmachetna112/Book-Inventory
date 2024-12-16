// src/components/DashboardCard.jsx
import React from 'react';

const DashboardCard = ({ title, count, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
      {/* Icon Section */}
      <div className="text-blue-600 bg-blue-100 rounded-full p-4">
        {icon || (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c.755 0 1.449-.216 2.036-.586m1.272 1.714A4.992 4.992 0 0112 10c-.755 0-1.449-.216-2.036-.586M8.928 10.414a4.992 4.992 0 01-.15-1.814m6.334 2.86A4.992 4.992 0 0112 14c-.755 0-1.449-.216-2.036-.586m2.25 3.48A4.992 4.992 0 0112 20c-.755 0-1.449-.216-2.036-.586M15.414 19.586a4.992 4.992 0 01-1.36-.22m-5.77-1.788A4.992 4.992 0 017.586 12c0-.755.216-1.449.586-2.036m1.03 6.464A4.992 4.992 0 0112 16m-4.95-3.95a4.992 4.992 0 01.516-.888"
            />
          </svg>
        )}
      </div>

      {/* Title and Count Section */}
      <div className="ml-4">
        <h2 className="text-gray-600 font-semibold">{title}</h2>
        <p className="text-2xl font-bold text-gray-800">{count}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
