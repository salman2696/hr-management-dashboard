import React, { useState, useContext } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import AdminPohto from "../assets/images/salman2696.jpg";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "./ThemeContext";
import ProfilePopup from "./ProfilePopup";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [user, setUser] = useState({
    email: "user@example.com",
    name: "John Doe",
    profilePicture: AdminPohto, // Replace with actual profile picture URL
  });

  const handleImageClick = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleToggleSidebar = (open) => {
    setIsSidebarOpen(open);
  };

  const isMenuItemClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <nav
        className={`fixed top-0 z-10 lg:left-[20%] lg:w-[80%] w-full min-h-16 flex items-center justify-between lg:justify-end gap-3 p-4 ${
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
        <div className="flex flex-row items-center gap-4">
          <ThemeToggle />
          <h1 className="flex items-center space-x-3">
            <img
              src={user.profilePicture}
              alt="Profile"
              className="w-12 h-12 rounded-full cursor-pointer"
              onClick={handleImageClick}
            />

            {isPopupOpen && (
              <ProfilePopup user={user} onClose={handleClosePopup} />
            )}
          </h1>
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} onMenuItemClick={isMenuItemClick} />
    </div>
  );
};

export default Header;
