import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./ThemeContext"; // Adjust the path as necessary

const TopEmployeesCard = ({ employees }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`card text-center shadow-xl p-4 border-[1px] w-full lg:w-2/3 ${
        theme === "dark"
          ? "bg-gray-800 border-gray-700 text-white"
          : "bg-white border-gray-300 text-black"
      }`}
    >
      <h2 className="text-lg font-bold mb-4">Top Employees</h2>
      <ul className="space-y-4">
        {employees.map((employee, index) => (
          <li
            key={index}
            className={`flex flex-col md:flex-row items-center md:gap-16 gap-2 border-b py-2 ${
              theme === "dark" ? "border-gray-700" : "border-gray-200"
            }`}
          >
            {/* Employee Avatar */}
            <div className="flex items-center justify-between gap-2">
              <img
                src={employee.avatar}
                alt={employee.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <p className="md:text-base text-sm font-semibold">
                {employee.name}
              </p>
            </div>
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {employee.position}
            </p>
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {employee.tasksDone} tasks done
            </p>
            <p
              className={`text-sm ${
                theme === "dark" ? "text-green-400" : "text-green-600"
              }`}
            >
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
