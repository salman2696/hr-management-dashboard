import React from "react";
import logo from "../assets/images/E&E-logo.png";
import {
  FaTachometerAlt,
  FaUsers,
  FaTags,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, onMenuItemCLick }) => {
  const { pathname } = useLocation(); // Hook to get the current route

  return (
    <div
      className={`sidebar fixed z-20 bg-gray-200 text-gray-800 h-full p-4 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      } lg:translate-x-0`}
    >
      <div className="flex flex-col items-center justify-center mb-10">
        <img className="h-14 md:block hidden" alt="Description" src={logo} />
      </div>
      <ul>
        <li
          className={`flex items-center mb-3 p-2 rounded-md transition duration-300 ${
            pathname === "/" ? "bg-white" : "hover:bg-white"
          }`}
        >
          <FaTachometerAlt className="mr-2 text-xl" />
          <Link
            to="/"
            onClick={() => onMenuItemCLick()}
            className={`flex-1 ${pathname === "/" ? "text-blue-500" : ""}`}
          >
            Dashboard
          </Link>
        </li>
        <li
          className={`flex items-center mb-3 p-2 rounded-md transition duration-300 ${
            pathname === "/employees" ? "bg-white" : "hover:bg-white"
          }`}
        >
          <FaUsers className="mr-2 text-xl" />
          <Link
            to="/employees"
            onClick={() => onMenuItemCLick()}
            className={`flex-1 ${
              pathname === "/employees" ? "text-blue-500" : ""
            }`}
          >
            Manage Employees
          </Link>
        </li>
        <li
          className={`flex items-center mb-3 p-2 rounded-md transition duration-300 ${
            pathname === "/categories" ? "bg-white" : "hover:bg-white"
          }`}
        >
          <FaTags className="mr-2 text-xl" />
          <Link
            to="/categories"
            onClick={() => onMenuItemCLick()}
            className={`flex-1 ${
              pathname === "/categories" ? "text-blue-500" : ""
            }`}
          >
            Category
          </Link>
        </li>
        <li
          className={`flex items-center mb-3 p-2 rounded-md transition duration-300 ${
            pathname === "/profile" ? "bg-white" : "hover:bg-white"
          }`}
        >
          <FaUser className="mr-2 text-xl" />
          <Link
            to="/profile"
            onClick={() => onMenuItemCLick()}
            className={`flex-1 ${
              pathname === "/profile" ? "text-blue-500" : ""
            }`}
          >
            Profile
          </Link>
        </li>
        <li
          className={`flex items-center p-2 rounded-md transition duration-300 ${
            pathname === "/logout" ? "bg-white" : "hover:bg-white"
          }`}
        >
          <FaSignOutAlt className="mr-2 text-xl" />
          <Link
            to="/logout"
            onClick={() => onMenuItemCLick()}
            className={`flex-1 ${
              pathname === "/logout" ? "text-blue-500" : ""
            }`}
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
