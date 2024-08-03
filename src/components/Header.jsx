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
        className={`fixed top-0 z-10 w-full flex items-center justify-between p-4 ${
          theme === "dark"
            ? "bg-gray-800 text-gray-300"
            : "bg-gray-200 text-black"
        }`}
      >
        <button
          onClick={() => handleToggleSidebar(!isSidebarOpen)}
          className="text-2xl lg:hidden"
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="text-2xl">
          <img className="h-10" alt="Description" src={logo} />
        </div>
        <ThemeToggle />
      </nav>
      <Sidebar isOpen={isSidebarOpen} onMenuItemCLick={isMenuItemClick} />
    </div>
  );
};

export default Header;
