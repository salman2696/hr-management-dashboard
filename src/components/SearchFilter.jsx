import React, { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Import ThemeContext

const SearchFilter = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const { theme } = useContext(ThemeContext); // Get the current theme from context

  const handleSearch = () => {
    onFilterChange({ searchTerm, position, department });
  };

  return (
    <div className={`flex md:flex-row flex-col gap-2 items-center w-full md:w-3/5 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <input
        type="text"
        placeholder="Search by Name"
        className={`input input-bordered ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700'} w-full text-sm`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
      />
      <select
        className={`select select-bordered ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700'} w-full text-xs`}
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      >
        <option value="">Select Position</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Product Manager">Product Manager</option>
        {/* Add more positions as needed */}
      </select>
      <select
        className={`select select-bordered ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700'} w-full text-xs`}
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="">Select Department</option>
        <option value="IT">IT</option>
        <option value="Marketing">Marketing</option>
        {/* Add more departments as needed */}
      </select>
      <button
        className={`btn ${theme === 'dark' ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-red-300 text-white hover:bg-red-400'} border-transparent md:w-28 w-full`}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchFilter;
