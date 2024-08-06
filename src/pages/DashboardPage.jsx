// src/pages/DashboardPage.jsx
import React, { useContext } from "react";
import Dashboard from "../components/Dashboard";
import { ThemeContext } from "../components/ThemeContext"; // Import ThemeContext

const DashboardPage = () => {
  const { theme } = useContext(ThemeContext);

  return <Dashboard />;
};

export default DashboardPage;
