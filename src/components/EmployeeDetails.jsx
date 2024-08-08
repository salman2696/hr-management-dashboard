import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import employees from "../EmployessData";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaDollarSign,
  FaLaptop,
  FaDesktop,
  FaLinkedin,
  FaUserTie,
} from "react-icons/fa";

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 text-white bg-red-400 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Back
      </button>
      <button
        onClick={() => navigate(`/payroll/${id}`)}
        className="mb-4 float-end px-4 py-2 text-white bg-red-400 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Payroll
      </button>

      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Employee Profile Section */}
        <div className="flex flex-col items-center lg:w-1/3 lg:items-start mb-6 lg:mb-0 p-4 border border-gray-300 shadow-lg rounded-lg">
          <img
            src={employee.avatar}
            alt={`${employee.name}'s Avatar`}
            className="w-32 h-32 rounded-full border-2 border-gray-300 mb-4"
          />
          <h1 className="text-3xl font-bold">{employee.name}</h1>
          <p className="text-lg text-gray-600">{employee.position}</p>
          <p className="text-gray-500">{employee.department}</p>
        </div>

        {/* Contact Information Section */}
        <div className="flex-1 mb-6 lg:mb-0 p-4 border border-gray-300 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="flex items-center mb-2">
            <FaEnvelope className="text-gray-500 mr-2" />
            <p>
              <strong>Email:</strong> {employee.email}
            </p>
          </div>
          <div className="flex items-center mb-2">
            <FaPhoneAlt className="text-gray-500 mr-2" />
            <p>
              <strong>Mobile:</strong> {employee.mobile}
            </p>
          </div>
          <div className="flex items-center mb-2">
            <FaLinkedin className="text-gray-500 mr-2" />
            <p>
              <strong>Linkedin:</strong> {employee.linkedin}
            </p>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <p>
              <strong>Address:</strong> {employee.address}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-8 mt-6">
        {/* Employment Details Section */}
        <div className="flex-1 mb-6 lg:mb-0 p-4 border border-gray-300 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Employment Details</h2>
          <div className="flex items-center mb-2">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <p>
              <strong>Date of Joining:</strong> {employee.dateOfJoining}
            </p>
          </div>
          <div className="flex items-center">
            <FaDollarSign className="text-gray-500 mr-2" />
            <p>
              <strong>Salary:</strong> {employee.salary}
            </p>
          </div>
          <div className="flex items-center">
            <FaUserTie className="text-gray-500 mr-2" />
            <p>
              <strong>Work Scedule:</strong> {employee.workSchedule}
            </p>
          </div>
        </div>

        {/* Equipment Issued Section */}
        <div className="flex-1 p-4 border border-gray-300 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Equipment Issued</h2>
          {employee.equipmentsIssued.map((equipment, index) => (
            <div key={index} className="flex items-center mb-2">
              {equipment.type === "Laptop" && (
                <FaLaptop className="text-gray-500 mr-2" />
              )}
              {equipment.type === "Desktop" && (
                <FaDesktop className="text-gray-500 mr-2" />
              )}
              <p>
                <strong>{equipment.type}:</strong> Date of issue{" "}
                {equipment.dateOfIssue}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
