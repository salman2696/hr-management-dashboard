// src/components/HamburgerMenu.jsx
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import SearchFilter from "./SearchFilter";

const HamburgerMenu = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <button
        className="p-2 text-gray-700 hover:text-gray-900 md:hidden"
        onClick={toggleMenu}
      >
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>
      <div
        className={`fixed top-0 right-0 w-4/5 h-full bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4">
          <SearchFilter onFilterChange={onFilterChange} />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
