// src/components/ProfilePopup.jsx
import React, {useContext} from "react";
import { FaEdit } from "react-icons/fa"; // Pencil icon
import LogoutButton from "./LogoutButton";
import { ThemeContext } from "./ThemeContext";

const ProfilePopup = ({ user, onClose }) => {
    const { theme } = useContext(ThemeContext);

  return (
    <div className={`absolute right-4 top-16 mt-2 shadow-lg rounded-lg w-64 z-50 ${
          theme === "dark"
            ? "bg-gray-900 text-gray-300"
            : "bg-[#f6f7f9] text-black"
        }`}>
      <div className="relative p-4">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <p className="text-gray-500">{user.email}</p>
        <div className="relative mt-2">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <button
            className="absolute bottom-0 right-0 bg-gray-200 p-1 rounded-full"
            onClick={() => alert("Edit Profile")}
          >
            <FaEdit className="text-gray-600" />
          </button>
        </div>
        <h2 className="text-xl font-semibold mt-2 text-center">
          Hii {user.name}
        </h2>
        <div className="mt-4 flex justify-center">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;
