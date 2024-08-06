import React, { useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "./Sidebar"; // Import the Sidebar component
import logo from "../assets/images/E&E-logo.png";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "./ThemeContext"; // Import ThemeContext

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme } = useContext(ThemeContext); // Get the current theme from context

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
          onClick={() => handleToggleSidebar(!isSidebarOpen)}
          className="text-2xl lg:hidden"
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
        <h1>Hi Salman</h1>
        <ThemeToggle />
      </nav>
      <Sidebar isOpen={isSidebarOpen} onMenuItemCLick={isMenuItemClick} />
    </div>
  );
};

export default Header;
