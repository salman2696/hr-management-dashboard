import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import EmployeePage from "./pages/EmployeePage";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";


function App() {
  return (
    <Router>
      <Header className="fixed" />
      <Sidebar />
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/employees" element={<EmployeePage />} />
          </Routes>
    </Router>
  );
}

export default App;
