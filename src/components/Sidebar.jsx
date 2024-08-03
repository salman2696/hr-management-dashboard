import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Adjust the path as necessary
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
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`sidebar fixed top-16 z-10 h-full p-4 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      } lg:translate-x-0 ${
        theme === "dark"
          ? "bg-gray-800 text-gray-300"
          : "bg-gray-200 text-gray-800"
      }`}
    >
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
            onClick={() => onMenuItemCLick()}
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
            onClick={() => onMenuItemCLick()}
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
            pathname === "/categories"
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
            to="/categories"
            onClick={() => onMenuItemCLick()}
            className={`flex-1 ${
              pathname === "/categories"
                ? theme === "dark"
                  ? "text-blue-400"
                  : "text-blue-500"
                : ""
            }`}
          >
            Category
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
            onClick={() => onMenuItemCLick()}
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
            onClick={() => onMenuItemCLick()}
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
