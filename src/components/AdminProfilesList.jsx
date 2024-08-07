// src/components/AdminProfilesList.jsx
import React, { useState } from "react";
import ProfilePopup from "./ProfilePopup"; // Import the ProfilePopup component

const AdminProfilesList = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const users = [
    {
      email: "user1@example.com",
      name: "John Doe",
      profilePicture: "https://via.placeholder.com/150",
    },
    {
      email: "user2@example.com",
      name: "Jane Smith",
      profilePicture: "https://via.placeholder.com/150",
    },
    // Add more user data as needed
  ];

  const handleProfileClick = (user) => {
    setSelectedUser(user);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Admin Profiles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 text-center cursor-pointer hover:bg-gray-100"
            onClick={() => handleProfileClick(user)}
          >
            <img
              src={user.profilePicture}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-2"
            />
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
        ))}
      </div>

      {selectedUser && (
        <ProfilePopup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          user={selectedUser}
        />
      )}
    </div>
  );
};

export default AdminProfilesList;
