// src/components/LogoutButton.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FaSignOutAlt } from 'react-icons/fa'; // Import the icon

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);

  return (
    <button 
      onClick={logout} 
      className="flex items-center px-4 py-2 text-white rounded-3xl w-full bg-gray-800  shadow-md transition duration-200"
    >
      <FaSignOutAlt className="mr-2" /> {/* Add icon with some margin */}
      Logout
    </button>
  );
};

export default LogoutButton;
