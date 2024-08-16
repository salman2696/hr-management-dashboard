import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SearchFilter from "./SearchFilter";
import { ThemeContext } from "./ThemeContext";
import employees from "../EmployessData";

const EmployeeList = () => {
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleFilterChange = ({ searchTerm, position, department }) => {
    const filtered = employees.filter((employee) => {
      const matchesName = employee.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesPosition = position ? employee.position === position : true;
      const matchesDepartment = department
        ? employee.department === department
        : true;
      return matchesName && matchesPosition && matchesDepartment;
    });
    setFilteredEmployees(filtered);
  };

  const handleAddEmployee = (newEmployee) => {
    employees.push({ id: employees.length + 1, ...newEmployee });
    setFilteredEmployees([...employees]);
    setIsModalOpen(false); // Close the modal after adding
  };

  const handleViewClick = (employee) => {
    navigate(`/employee-details/${employee.id}`);
  };

  return (
    <div
      className={`gap-4 p-4 min-h-screen rounded-xl w-full ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div
        className={`shadow-md z-10 flex md:flex-row flex-col items-center justify-between p-4 rounded-xl ${
          theme === "dark"
            ? "bg-gray-800 text-gray-200"
            : "bg-white text-gray-800"
        }`}
      >
        <h1 className="text-2xl mb-4 md:mb-0">Employees</h1>
        <SearchFilter 
          onFilterChange={handleFilterChange} 
          onAddEmployeeClick={() => setIsModalOpen(true)} // Pass the function to open the modal
        />
      </div>
      <div
        className={`overflow-x-auto mt-4 rounded-xl ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <table
          className={`table w-full ${
            theme === "dark"
              ? "bg-gray-900 text-gray-300"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          <thead
            className={`${
              theme === "dark" ? "bg-gray-800 text-gray-300" : "text-gray-700"
            }`}
          >
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Position</th>
              <th className="py-2 px-4 border-b">Department</th>
              <th className="py-2 px-4 border-b">Details</th>
            </tr>
          </thead>
          <tbody
            className={`${
              theme === "dark" ? "bg-gray-800 text-gray-300" : "text-gray-700"
            }`}
          >
            {filteredEmployees.map((employee) => (
              <tr key={employee.id}>
                <td className="py-2 px-4 border-b">{employee.id}</td>
                <td className="py-2 px-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={employee.avatar}
                          alt={`${employee.name}'s Avatar`}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{employee.name}</div>
                      <div className="text-sm opacity-50">
                        {employee.country}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4 border-b">{employee.position}</td>
                <td className="py-2 px-4 border-b">{employee.department}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleViewClick(employee)}
                    className="btn btn-ghost btn-xs"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Adding Employee */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div
            className={`p-6 rounded-lg shadow-lg w-96 ${
              theme === "dark"
                ? "bg-gray-800 text-gray-200"
                : "bg-white text-gray-800"
            }`}
          >
            <h2 className="text-xl mb-4">Add New Employee</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const newEmployee = {
                  name: form.name.value,
                  location: form.location.value,
                  position: form.position.value,
                  department: form.department.value,
                  avatar: "https://via.placeholder.com/150", // Placeholder avatar
                };
                handleAddEmployee(newEmployee);
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium">Name</label>
                <input
                  name="name"
                  type="text"
                  className={`input input-bordered w-full ${
                    theme === "dark" ? "bg-gray-700 text-gray-300" : "bg-white text-gray-700"
                  }`}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Location</label>
                <input
                  name="location"
                  type="text"
                  className={`input input-bordered w-full ${
                    theme === "dark" ? "bg-gray-700 text-gray-300" : "bg-white text-gray-700"
                  }`}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Position</label>
                <input
                  name="position"
                  type="text"
                  className={`input input-bordered w-full ${
                    theme === "dark" ? "bg-gray-700 text-gray-300" : "bg-white text-gray-700"
                  }`}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Department</label>
                <input
                  name="department"
                  type="text"
                  className={`input input-bordered w-full ${
                    theme === "dark" ? "bg-gray-700 text-gray-300" : "bg-white text-gray-700"
                  }`}
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Add Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
