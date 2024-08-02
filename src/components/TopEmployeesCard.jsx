import React from "react";
import PropTypes from "prop-types";

const TopEmployeesCard = ({ employees }) => {
  return (
    <div className="card bg-white min-w-56 shadow-xl p-4  border-gray-300 border-[1px]">
      <h2 className="text-lg font-bold mb-4">Top Employees</h2>
      <ul className="space-y-4">
        {employees.map((employee, index) => (
          <li
            key={index}
            className="flex flex-row items-center gap-20 border-b border-gray-200 py-2"
          >
            {/* Employee Avatar */}
            <div className="flex items-center justify-between gap-2">
              <img
                src={employee.avatar}
                alt={employee.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <p className="text-sm font-semibold">{employee.name}</p>
            </div>
            <p className="text-sm text-gray-600">{employee.position}</p>
            <p className="text-sm text-gray-600 mt-1">
              {employee.tasksDone} tasks done
            </p>
            <p className="text-sm text-green-600">
              {employee.pointsEarned} pts
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

TopEmployeesCard.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      tasksDone: PropTypes.number.isRequired,
      pointsEarned: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TopEmployeesCard;
