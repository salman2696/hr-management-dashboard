import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import EmployeePage from "./pages/EmployeePage";
import Navbar from "./components/Header";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    <Router>
        <Header />
        <Sidebar />
        <div className="flex-1 flex flex-col bg-gray-200  lg:ml-12 p-4">
          <main className="flex-1 p-4 lg:ml-52 rounded-lg min-h-screen  bg-white">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/employees" element={<EmployeePage />} />
              {/* Add other routes as needed */}
            </Routes>
          </main>
        </div>
    </Router>
  );
}

export default App;
