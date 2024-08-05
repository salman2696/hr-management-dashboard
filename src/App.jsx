import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import EmployeePage from "./pages/EmployeePage";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import EmployeeDetails from "./components/EmployeeDetails";
import Payroll from "./components/Payroll";

function App() {
  return (
    <Router>
      <Header className="fixed" />
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/employees" element={<EmployeePage />} />
        <Route path="/employee-details/:id" element={<EmployeeDetails />} />
        <Route path="/payroll/:id" element={<Payroll />} />
      </Routes>
    </Router>
  );
}

export default App;
