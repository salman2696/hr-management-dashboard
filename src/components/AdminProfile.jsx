import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import AdminPhoto from "../assets/images/salman2696.jpg";

const AdminProfile = () => {
  const { theme } = useContext(ThemeContext);

  // Example admin data
  const admin = {
    name: "Mohammad Salman",
    role: "Administrator",
    email: "alex.johnson@example.com",
    phone: "+1-234-567-890",
    avatar: AdminPhoto,
    joinDate: "2024-06-08",
  };

  return (
    <div
      className={`p-6 w-full min-h-screen rounded-xl shadow-lg ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Profile Header */}
      <div className="flex items-center mb-6">
        <img
          src={admin.avatar}
          alt={`${admin.name}'s avatar`}
          className="w-24 h-24 rounded-full mr-4"
        />
        <div>
          <h2 className="text-2xl font-semibold">{admin.name}</h2>
          <p className="text-lg font-medium text-gray-600">{admin.role}</p>
          <p className="text-sm text-gray-500">
            Joined on {new Date(admin.joinDate).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Profile Details */}
      <div className="space-y-4">
        <div
          className={` p-4 rounded-lg shadow-sm ${
            theme === "dark"
              ? "bg-gray-800 text-white"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          <h3 className="text-lg font-medium">Contact Information</h3>
          <p
            className={`${
              theme === "dark" ? " text-gray-400" : "text-gray-800"
            }`}
          >
            <strong>Email:</strong> {admin.email}
          </p>
          <p
            className={`${
              theme === "dark" ? " text-gray-400" : "text-gray-800"
            }`}
          >
            <strong>Phone:</strong> {admin.phone}
          </p>
        </div>

        <div
          className={`p-4 rounded-lg shadow-sm ${
            theme === "dark"
              ? "bg-gray-800 text-white"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          <h3 className="text-lg font-medium">Additional Details</h3>
          <p
            className={`${
              theme === "dark" ? " text-gray-400" : "text-gray-800"
            }`}
          >
            <strong>Department:</strong> Management
          </p>
          <p
            className={`${
              theme === "dark" ? " text-gray-400" : "text-gray-800"
            }`}
          >
            <strong>Location:</strong> New York Office
          </p>
        </div>
      </div>

      {/* Edit Profile Button */}
      <div className="mt-6">
        <button
          className={`px-4 py-2 rounded-md font-semibold ${
            theme === "dark" ? "bg-red-500 text-whit" : "bg-red-400 text-white"
          } hover:${theme === "dark" ? "bg-red-600" : "bg-red-500"}`}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default AdminProfile;
