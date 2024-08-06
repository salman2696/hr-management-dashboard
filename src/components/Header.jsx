import React, { useState, useContext } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import logo from "../assets/images/E&E-logo.png";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "./ThemeContext";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleToggleSidebar = (open) => {
    setIsSidebarOpen(open);
  };

  const isMenuItemClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <nav
        className={`fixed top-0 z-10 lg:left-[20%] lg:w-[80%] w-full min-h-16 flex items-center justify-between p-4 ${
          theme === "dark"
            ? "bg-gray-800 text-gray-300"
            : "bg-[#f6f7f9] text-black"
        }`}
      >
        <button
          onClick={() => handleToggleSidebar(true)}
          className="text-2xl lg:hidden"
        >
          <FaBars />
        </button>
        <h1 className="flex items-center space-x-3">
          <img
            src="https://img.daisyui.com/images/profile/demo/2@94.webp" // Replace with your actual avatar link
            alt="Admin Avatar"
            className="w-10 h-10 rounded-full"
          />
          <span>Hi Salman</span>
        </h1>
        <ThemeToggle />
      </nav>
      <Sidebar isOpen={isSidebarOpen} onMenuItemClick={isMenuItemClick} />
    </div>
  );
};

export default Header;
