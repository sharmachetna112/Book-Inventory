// src/components/DashboardCard.jsx
import React from "react";

const DashboardCard = ({ title, count, icon }) => {
  return (
    <div className="card shadow-sm rounded mb-4" style={{ maxWidth: "18rem" }}>
      <div className="d-flex align-items-center p-3">
        {/* Icon Section */}
        <div
          className="bg-primary text-white d-flex justify-content-center align-items-center rounded-circle"
          style={{ width: "50px", height: "50px" }}
        >
          {icon || (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
              style={{ width: "24px", height: "24px" }}
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
        <div className="ms-3">
          <h5 className="mb-1 text-muted">{title}</h5>
          <p className="h5 mb-0 fw-bold text-dark">{count}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
