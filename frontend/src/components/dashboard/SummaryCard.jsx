// src/components/dashboard/SummaryCard.jsx

import React from 'react';

const SummaryCard = ({ icon, iconBgColor, text, number }) => {
  return (
    <div className="d-flex rounded bg-white border shadow-sm">
      <div className={`d-flex align-items-center justify-content-center ${iconBgColor} text-white px-3`} style={{ fontSize: '2rem' }}>
        {icon}
      </div>
      <div className="ps-3 py-2">
        <p className="mb-1 fw-semibold">{text}</p>
        <p className="mb-0 fw-bold">{number}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
