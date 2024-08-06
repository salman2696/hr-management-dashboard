import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import {
  FaTachometerAlt,
  FaUsers,
  FaTags,
  FaUser,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/E&E-logo.png";

const Sidebar = ({ isOpen, onMenuItemClick }) => {
  const { pathname } = useLocation();
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`sidebar fixed top-0 z-20 h-full lg:w-[20%] w-[45%] p-4 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-[100%]"
      } lg:translate-x-0 ${
        theme === "dark"
          ? "bg-gray-800 text-gray-300"
          : "bg-[#f6f7f9] text-gray-800"
      }`}
    >
      <div className="flex items-center justify-between">
        <button
          onClick={() => onMenuItemClick()}
          className="text-2xl lg:hidden"
        >
          <FaTimes />
        </button>
      </div>
      <img className="h-10 mt-4" alt="Description" src={logo} />
      <ul className="mt-4">
        <li
          className={`flex items-center mb-3 p-2 rounded-md transition duration-300 ${
            pathname === "/"
              ? theme === "dark"
                ? "bg-gray-700"
                : "bg-white"
              : theme === "dark"
              ? "hover:bg-gray-600"
              : "hover:bg-white"
          }`}
        >
          <FaTachometerAlt className="mr-2 text-xl" />
          <Link
            to="/"
            onClick={() => onMenuItemClick()}
            className={`flex-1 ${
              pathname === "/"
                ? theme === "dark"
                  ? "text-blue-400"
                  : "text-blue-500"
                : ""
            }`}
          >
            Dashboard
          </Link>
        </li>
        <li
          className={`flex items-center mb-3 p-2 rounded-md transition duration-300 ${
            pathname === "/employees"
              ? theme === "dark"
                ? "bg-gray-700"
                : "bg-white"
              : theme === "dark"
              ? "hover:bg-gray-600"
              : "hover:bg-white"
          }`}
        >
          <FaUsers className="mr-2 text-xl" />
          <Link
            to="/employees"
            onClick={() => onMenuItemClick()}
            className={`flex-1 ${
              pathname === "/employees"
                ? theme === "dark"
                  ? "text-blue-400"
                  : "text-blue-500"
                : ""
            }`}
          >
            Manage Employees
          </Link>
        </li>
        <li
          className={`flex items-center mb-3 p-2 rounded-md transition duration-300 ${
            pathname === "/leave-management"
              ? theme === "dark"
                ? "bg-gray-700"
                : "bg-white"
              : theme === "dark"
              ? "hover:bg-gray-600"
              : "hover:bg-white"
          }`}
        >
          <FaTags className="mr-2 text-xl" />
          <Link
            to="/leave-management"
            onClick={() => onMenuItemClick()}
            className={`flex-1 ${
              pathname === "/leave-management"
                ? theme === "dark"
                  ? "text-blue-400"
                  : "text-blue-500"
                : ""
            }`}
          >
            Leave Management
          </Link>
        </li>
        <li
          className={`flex items-center mb-3 p-2 rounded-md transition duration-300 ${
            pathname === "/profile"
              ? theme === "dark"
                ? "bg-gray-700"
                : "bg-white"
              : theme === "dark"
              ? "hover:bg-gray-600"
              : "hover:bg-white"
          }`}
        >
          <FaUser className="mr-2 text-xl" />
          <Link
            to="/profile"
            onClick={() => onMenuItemClick()}
            className={`flex-1 ${
              pathname === "/profile"
                ? theme === "dark"
                  ? "text-blue-400"
                  : "text-blue-500"
                : ""
            }`}
          >
            Profile
          </Link>
        </li>
        <li
          className={`flex items-center p-2 rounded-md transition duration-300 ${
            pathname === "/logout"
              ? theme === "dark"
                ? "bg-gray-700"
                : "bg-white"
              : theme === "dark"
              ? "hover:bg-gray-600"
              : "hover:bg-white"
          }`}
        >
          <FaSignOutAlt className="mr-2 text-xl" />
          <Link
            to="/logout"
            onClick={() => onMenuItemClick()}
            className={`flex-1 ${
              pathname === "/logout"
                ? theme === "dark"
                  ? "text-blue-400"
                  : "text-blue-500"
                : ""
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
