import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import EmployeePage from "./pages/EmployeePage";
import EmployeeDetails from "./components/EmployeeDetails";
import Payroll from "./components/Payroll";
import Layout from "./components/Layout";
import LeaveManagement from "./components/LeaveManagement";
import AdminProfile from "./components/AdminProfile";
import Login from "./pages/Login"; // Import Login component
import { AuthProvider, AuthContext } from "./context/AuthContext"; // Import AuthContext

// Protected Route Component
const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { auth } = React.useContext(AuthContext);
  return auth ? <Element {...rest} /> : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<ProtectedRoute element={DashboardPage} />} />
            <Route
              path="/employees"
              element={<ProtectedRoute element={EmployeePage} />}
            />
            <Route
              path="/employee-details/:id"
              element={<ProtectedRoute element={EmployeeDetails} />}
            />
            <Route
              path="/payroll/:id"
              element={<ProtectedRoute element={Payroll} />}
            />
            <Route
              path="/leave-management"
              element={<ProtectedRoute element={LeaveManagement} />}
            />
            <Route
              path="/admin-profile"
              element={<ProtectedRoute element={AdminProfile} />}
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />{" "}
          {/* Redirect to home for unknown routes */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
