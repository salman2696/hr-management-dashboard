import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext"; // Import ThemeContext

const EmployeeModal = ({ employee, onClose }) => {
  const { theme } = useContext(ThemeContext); // Get the current theme from context

  if (!employee) return null;

  // Ensure equipmentsIssued is always an array
  const equipmentsIssued = Array.isArray(employee.equipmentsIssued)
    ? employee.equipmentsIssued
    : [];

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        theme === "dark"
          ? "bg-gray-900 bg-opacity-75"
          : "bg-gray-800 bg-opacity-75"
      }`}
    >
      <div
        className={`rounded-lg shadow-lg p-6 w-11/12 md:w-1/3 ${
          theme === "dark"
            ? "bg-gray-700 text-gray-200"
            : "bg-white text-gray-800"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Employee Details</h2>
          <button
            onClick={onClose}
            className={`${
              theme === "dark"
                ? "text-gray-200 hover:text-gray-300"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <FaTimes size={20} />
          </button>
        </div>
        <div className="flex flex-col items-center mb-4">
          <img
            src={employee.avatar}
            alt={`${employee.name}'s Avatar`}
            className="w-24 h-24 rounded-full mb-2"
          />
          <h3 className="text-lg font-semibold">{employee.name}</h3>
          <p className="text-sm">{employee.country}</p>
        </div>
        <div className="mb-4">
          <p>
            <strong>Position:</strong> {employee.position}
          </p>
          <p>
            <strong>Department:</strong> {employee.department}
          </p>
          <p>
            <strong>Email:</strong> {employee.email}
          </p>
          <p>
            <strong>Address:</strong> {employee.address}
          </p>
          <p>
            <strong>Mobile Number:</strong> {employee.mobile}
          </p>
          <p>
            <strong>Date of Joining:</strong> {employee.dateOfJoining}
          </p>
          <p>
            <strong>Salary:</strong> {employee.salary}
          </p>
          <p>
            <strong>Equipments Issued:</strong> {equipmentsIssued.join(', ')}
          </p>
        </div>
        <button
          onClick={onClose}
          className={`btn ${
            theme === "dark"
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EmployeeModal;
