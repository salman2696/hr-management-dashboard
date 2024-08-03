// src/pages/DashboardPage.jsx
import React, { useContext } from "react";
import Dashboard from "../components/Dashboard";
import { ThemeContext } from "../components/ThemeContext"; // Import ThemeContext

const DashboardPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`dashboard-page lg:ml-52 p-4 mt-16 ${
        theme === "dark"
          ? "bg-gray-800 text-gray-300"
          : "bg-gray-200 text-black"
      }`}
    >
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
