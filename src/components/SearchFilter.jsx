import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import { AiOutlineUserAdd } from "react-icons/ai";

const SearchFilter = ({ onFilterChange, onAddEmployeeClick }) => {
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
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <button
        className="text-xl mr-5 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
        onClick={onAddEmployeeClick}
      >
        <AiOutlineUserAdd />
      </button>
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
        } w-full text-sm`}
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      >
        <option value="">Search by Position</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Project Manager">Project Manager</option>
        <option value="Sales Executive">Sales Executive</option>
        <option value="Analyst">Analyst</option>
        <option value="HR Manager">HR Manager</option>
      </select>
      <select
        className={`select select-bordered ${
          theme === "dark"
            ? "bg-gray-700 text-gray-300"
            : "bg-white text-gray-700"
        } w-full text-sm`}
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="">Search By Departments</option>
        <option value="Sales">Sales</option>
        <option value="Marketing">Marketing</option>
        <option value="Development">Development</option>
        <option value="Design">Design</option>
        <option value="HR">HR</option>
      </select>
    </div>
  );
};

export default SearchFilter;
