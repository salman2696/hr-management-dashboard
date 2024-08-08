import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

const SearchFilter = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const { theme } = useContext(ThemeContext);

  // Call onFilterChange whenever searchTerm, position, or department changes
  useEffect(() => {
    onFilterChange({ searchTerm, position, department });
  }, [searchTerm, position, department]);

  return (
    <div
      className={`flex md:flex-row flex-col gap-2 items-center w-full md:w-3/5 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <input
        type="text"
        placeholder="Search by Name"
        className={`input input-bordered ${
          theme === "dark"
            ? "bg-gray-700 text-gray-300"
            : "bg-white text-gray-700"
        } w-full text-sm`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        className={`select select-bordered ${
          theme === "dark"
            ? "bg-gray-700 text-gray-300"
            : "bg-white text-gray-700"
        } w-full text-xs`}
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      >
        <option value="">Select Position</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Product Manager">Product Manager</option>
        <option value="HR Manager">Hr Manager</option>
        {/* Add more positions as needed */}
      </select>
      <select
        className={`select select-bordered ${
          theme === "dark"
            ? "bg-gray-700 text-gray-300"
            : "bg-white text-gray-700"
        } w-full text-xs`}
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="">Select Department</option>
        <option value="IT">IT</option>
        <option value="Marketing">Marketing</option>
        {/* Add more departments as needed */}
      </select>
    </div>
  );
};

export default SearchFilter;
