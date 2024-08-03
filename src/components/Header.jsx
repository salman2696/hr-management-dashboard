import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "./Sidebar"; // Import the Sidebar component
import logo from "../assets/images/E&E-logo.png";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = (open) => {
    setIsSidebarOpen(open);
  };

  const isMenuItemClick = () => {
    setIsSidebarOpen(false)
  }

  return (
    <div>
      <nav className=" bg-gray-200 text-black flex items-center justify-between p-4 lg:hidden">
        <button
          onClick={() => handleToggleSidebar(!isSidebarOpen)}
          className="text-2xl"
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="text-2xl"><img className="h-8" alt="Description" src={logo} /></div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} onMenuItemCLick={isMenuItemClick} /> {/* Pass the isOpen state */}
    </div>
  );
};

export default Header;
