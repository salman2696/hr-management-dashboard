// src/pages/EmployeePage.jsx
import React, {useContext} from "react";
import EmployeeList from "../components/EmployeeList";
import { ThemeContext } from '../components/ThemeContext'; // Import ThemeContext

const EmployeePage = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`dashboard-page lg:ml-52 rounded-lg p-4 mt-16 ${
      theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-black'
    }`}>
    <EmployeeList />
  </div>
);};

export default EmployeePage;
