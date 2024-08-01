// src/components/SearchFilter.jsx
import React, { useState } from "react";

const SearchFilter = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");

  const handleSearch = () => {
    onFilterChange({ searchTerm, position, department });
  };

  return (
    <div className="flex flex-row gap-2 items-center">
      <input
        type="text"
        placeholder="Search by Name"
        className="input input-bordered bg-white text-gray-700 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
      />
      <select
        className="select select-bordered bg-white text-gray-700 w-full"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      >
        <option value="">Select Position</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Product Manager">Product Manager</option>
        {/* Add more positions as needed */}
      </select>
      <select
        className="select select-bordered bg-white text-gray-700 w-full"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="">Select Department</option>
        <option value="IT">IT</option>
        <option value="Marketing">Marketing</option>
        {/* Add more departments as needed */}
      </select>
      <button
        className="btn bg-red-300 text-white hover:bg-red-400 border-transparent hover:border-transparent"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchFilter;
