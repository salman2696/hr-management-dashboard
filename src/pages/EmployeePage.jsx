// src/pages/EmployeePage.jsx
import React, { useContext } from "react";
import EmployeeList from "../components/EmployeeList";
import { ThemeContext } from "../components/ThemeContext"; // Import ThemeContext

const EmployeePage = () => {
  const { theme } = useContext(ThemeContext);

  return (
      <EmployeeList />
   
  );
};

export default EmployeePage;
