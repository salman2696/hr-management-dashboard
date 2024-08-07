// src/components/LogoutButton.jsx
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaSignOutAlt } from "react-icons/fa"; // Import the icon
import { ThemeContext } from "./ThemeContext";

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  return (
    <button
      onClick={logout}
      className={`flex items-center px-4 py-2  rounded-3xl   ${
        theme === "dark" ? "bg-red-500 text-white" : "bg-white text-black"
      }  shadow-md`}
    >
      <FaSignOutAlt className="mr-2" /> {/* Add icon with some margin */}
      Logout
    </button>
  );
};

export default LogoutButton;
