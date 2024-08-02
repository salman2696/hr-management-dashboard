// src/components/Sidebar.jsx
import React from "react";
import logo from "../assets/images/E&E-logo.png";
import {
  FaTachometerAlt,
  FaUsers,
  FaTags,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="sidebar fixed bg-gray-200 text-white w-64 h-[100vh] p-4">
    <div className="flex flex-col items-center justify-center mb-16">
      <img className="h-14" alt="Description" src={logo} />
    </div>
    <ul className="text-gray-800">
      <li className="flex items-center mb-9">
        <FaTachometerAlt className="mr-2 text-xl" />
        <Link to="/">Dashboard</Link>
      </li>
      <li className="flex items-center mb-9">
        <FaUsers className="mr-2 text-xl" />
        <Link to="/employees">Manage Employees</Link>
      </li>
      <li className="flex items-center mb-9">
        <FaTags className="mr-2 text-xl" />
        <Link to="/categories">Category</Link>
      </li>
      <li className="flex items-center mb-9">
        <FaUser className="mr-2 text-xl" />
        <Link to="/profile">Profile</Link>
      </li>
      <li className="flex items-center">
        <FaSignOutAlt className="mr-2 text-xl" />
        <Link to="/logout">Logout</Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;
