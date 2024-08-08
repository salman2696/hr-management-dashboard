import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import employees from "../EmployessData";
import {
  FaUserTie,
  FaDollarSign,
  FaCalendarAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

const Payroll = () => {
  const { id } = useParams();
  const { theme } = useContext(ThemeContext);
  const employee = employees.find((emp) => emp.id === parseInt(id));

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div
      className={`p-4 rounded-xl min-h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-gray-200"
          : "bg-white text-gray-900"
      }`}
    >
      {/* Top Card with Avatar, Name, and Position */}
      <div className="flex items-center mb-6 p-4 border border-gray-300 shadow-lg rounded-lg">
        <img
          src={employee.avatar}
          alt={`${employee.name}'s Avatar`}
          className="w-20 h-20 rounded-full border-2 border-gray-300 mr-4"
        />
        <div>
          <h1 className="text-2xl font-bold">{employee.name}</h1>
          <p className="text-lg text-gray-600">{employee.position}</p>
        </div>
      </div>

      {/* Cards for Salary, Monthly Leaves, and Allowances in the same line */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Salary Card */}
        <div className="flex-1 p-4 border border-gray-300 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text">Salary</h2>
          <div className="flex items-center">
            <FaDollarSign className="text-gray-500 mr-2" />
            <p className="text-lg">{employee.salary}</p>
          </div>
        </div>

        {/* Monthly Leaves Card */}
        <div className="flex-1 p-4 border border-gray-300 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Monthly Leaves</h2>
          <div className="flex items-center">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <p className="text-lg">{employee.monthlyLeaves} days</p>
          </div>
        </div>

        {/* Allowances Card */}
        <div className="flex-1 p-4 border border-gray-300 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Allowances</h2>
          <div className="space-y-2">
            {Object.entries(employee.allowances).map(([key, value]) => (
              <div key={key} className="flex items-center">
                <FaMoneyBillWave className="text-gray-500 mr-2" />
                <p className="text-lg">{key}:</p>
                <p className="text-lg ml-2">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payroll;
