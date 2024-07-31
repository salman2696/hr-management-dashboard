import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ icon, title, value, description, percentageChange, period }) => {
  return (
    <div className="card bg-white min-w-40 shadow-xl p-4">
      {icon}
      <p className="card-title text-lg font-bold mt-4">{title}</p>
      <div className="flex flex-col gap-1 my-2">
        <h1 className="text-2xl font-bold text-gray-800">{value}</h1>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <div className="flex flex-row gap-1 mt-5 text-sm">
        <div className={`text-green-500 ${percentageChange.startsWith('-') ? 'text-red-500' : ''}`}>
          {percentageChange}
        </div>
        <div className="stat-title">{period}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  percentageChange: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
};

export default Card;
