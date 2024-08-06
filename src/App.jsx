import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import EmployeePage from "./pages/EmployeePage";
import EmployeeDetails from "./components/EmployeeDetails";
import Payroll from "./components/Payroll";
import Layout from "./components/Layout";
import LeaveManagement from "./components/LeaveManagement"
import AdminProfile from "./components/AdminProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="/employees" element={<EmployeePage />} />
        <Route path="/employee-details/:id" element={<EmployeeDetails />} />
        <Route path="/payroll/:id" element={<Payroll />} />
        <Route path="/leave-management" element= {<LeaveManagement />} />
        <Route path="/admin-profile" element = {<AdminProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
