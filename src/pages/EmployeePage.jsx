// src/pages/EmployeePage.jsx
import React, { useContext } from "react";
import EmployeeList from "../components/EmployeeList";
import { ThemeContext } from "../components/ThemeContext"; // Import ThemeContext

const EmployeePage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen lg:ml-52  p-4 mt-16 ${
        theme === "dark"
          ? "bg-gray-800 text-gray-300"
          : "bg-[#f6f7f9] text-black"
      }`}
    >
      <EmployeeList />
    </div>
  );
};

export default EmployeePage;
