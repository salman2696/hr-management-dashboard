import React, { useState } from "react";
import logo from "../assets/images/E&E-logo.png";
import {
  FaTachometerAlt,
  FaUsers,
  FaTags,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation(); // Hook to get the current route

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Sidebar for small screens */}
      <div className={`fixed top-0 left-0 z-50 h-full bg-gray-200 text-gray-800 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-1"} lg:hidden `}>
        <div className="flex flex-col h-full">
          <div className="flex justify-center p-4">
            {isOpen && <img className="h-14" alt="Description" src={logo} />}
            <button onClick={toggleSidebar} className="text-xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <ul className="flex flex-col p-4">
            {isOpen && (
              <>
                <li className={`flex items-center mb-9 p-2 rounded-md transition duration-300 ${pathname === "/" ? "bg-white" : "hover:bg-white"}`}>
                  <FaTachometerAlt className="mr-2 text-xl" />
                  <Link to="/" className={`flex-1 ${pathname === "/" ? "text-blue-500" : ""}`}>Dashboard</Link>
                </li>
                <li className={`flex items-center mb-9 p-2 rounded-md transition duration-300 ${pathname === "/employees" ? "bg-white" : "hover:bg-white"}`}>
                  <FaUsers className="mr-2 text-xl" />
                  <Link to="/employees" className={`flex-1 ${pathname === "/employees" ? "text-blue-500" : ""}`}>Manage Employees</Link>
                </li>
                <li className={`flex items-center mb-9 p-2 rounded-md transition duration-300 ${pathname === "/categories" ? "bg-white" : "hover:bg-white"}`}>
                  <FaTags className="mr-2 text-xl" />
                  <Link to="/categories" className={`flex-1 ${pathname === "/categories" ? "text-blue-500" : ""}`}>Category</Link>
                </li>
                <li className={`flex items-center mb-9 p-2 rounded-md transition duration-300 ${pathname === "/profile" ? "bg-white" : "hover:bg-white"}`}>
                  <FaUser className="mr-2 text-xl" />
                  <Link to="/profile" className={`flex-1 ${pathname === "/profile" ? "text-blue-500" : ""}`}>Profile</Link>
                </li>
                <li className={`flex items-center p-2 rounded-md transition duration-300 ${pathname === "/logout" ? "bg-white" : "hover:bg-white"}`}>
                  <FaSignOutAlt className="mr-2 text-xl" />
                  <Link to="/logout" className={`flex-1 ${pathname === "/logout" ? "text-blue-500" : ""}`}>Logout</Link>
                </li>
              </>
            )}
            {!isOpen && (
              <div className="flex flex-col items-center">
                <li className={`flex items-center mb-4 p-2 rounded-md transition duration-300 ${pathname === "/" ? "bg-white" : "hover:bg-white"}`}>
                  <Link to="/" className={`flex items-center ${pathname === "/" ? "text-blue-500" : ""}`}>
                    <FaTachometerAlt className="text-xl" />
                  </Link>
                </li>
                <li className={`flex items-center mb-4 p-2 rounded-md transition duration-300 ${pathname === "/employees" ? "bg-white" : "hover:bg-white"}`}>
                  <Link to="/employees" className={`flex items-center ${pathname === "/employees" ? "text-blue-500" : ""}`}>
                    <FaUsers className="text-xl" />
                  </Link>
                </li>
                <li className={`flex items-center mb-4 p-2 rounded-md transition duration-300 ${pathname === "/categories" ? "bg-white" : "hover:bg-white"}`}>
                  <Link to="/categories" className={`flex items-center ${pathname === "/categories" ? "text-blue-500" : ""}`}>
                    <FaTags className="text-xl" />
                  </Link>
                </li>
                <li className={`flex items-center mb-4 p-2 rounded-md transition duration-300 ${pathname === "/profile" ? "bg-white" : "hover:bg-white"}`}>
                  <Link to="/profile" className={`flex items-center ${pathname === "/profile" ? "text-blue-500" : ""}`}>
                    <FaUser className="text-xl" />
                  </Link>
                </li>
                <li className={`flex items-center p-2 rounded-md transition duration-300 ${pathname === "/logout" ? "bg-white" : "hover:bg-white"}`}>
                  <Link to="/logout" className={`flex items-center ${pathname === "/logout" ? "text-blue-500" : ""}`}>
                    <FaSignOutAlt className="text-xl" />
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>

      {/* Sidebar for large screens */}
      <div className="hidden lg:flex fixed top-0 left-0 h-full bg-gray-200 text-gray-800 w-64">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4">
            <img className="h-14" alt="Description" src={logo} />
          </div>
          <ul className="flex flex-col p-4">
            <li className={`flex items-center mb-8 p-2 rounded-md transition duration-300 ${pathname === "/" ? "bg-white" : "hover:bg-white"}`}>
              <FaTachometerAlt className="mr-2 text-xl" />
              <Link to="/" className={`flex-1 ${pathname === "/" ? "text-blue-500" : ""}`}>Dashboard</Link>
            </li>
            <li className={`flex items-center mb-8 p-2 rounded-md transition duration-300 ${pathname === "/employees" ? "bg-white" : "hover:bg-white"}`}>
              <FaUsers className="mr-2 text-xl" />
              <Link to="/employees" className={`flex-1 ${pathname === "/employees" ? "text-blue-500" : ""}`}>Manage Employees</Link>
            </li>
            <li className={`flex items-center mb-8 p-2 rounded-md transition duration-300 ${pathname === "/categories" ? "bg-white" : "hover:bg-white"}`}>
              <FaTags className="mr-2 text-xl" />
              <Link to="/categories" className={`flex-1 ${pathname === "/categories" ? "text-blue-500" : ""}`}>Category</Link>
            </li>
            <li className={`flex items-center mb-8 p-2 rounded-md transition duration-300 ${pathname === "/profile" ? "bg-white" : "hover:bg-white"}`}>
              <FaUser className="mr-2 text-xl" />
              <Link to="/profile" className={`flex-1 ${pathname === "/profile" ? "text-blue-500" : ""}`}>Profile</Link>
            </li>
            <li className={`flex items-center p-2 rounded-md transition duration-300 ${pathname === "/logout" ? "bg-white" : "hover:bg-white"}`}>
              <FaSignOutAlt className="mr-2 text-xl" />
              <Link to="/logout" className={`flex-1 ${pathname === "/logout" ? "text-blue-500" : ""}`}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
