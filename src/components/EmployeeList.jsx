import React, { useState, useContext } from "react";
import SearchFilter from "./SearchFilter";
import { ThemeContext } from "./ThemeContext";
import EmployeeModal from "./EmployeeModal";

// Sample employee data (same as before)
const employees = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    department: "IT",
    avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    country: "United States",
    email: "john.doe@example.com",
    address: "123 Elm Street, Springfield, IL",
    mobile: "+1 555-123-4567",
    dateOfJoining: "2020-01-15",
    salary: "$80,000",
    equipmentsIssued: ["Laptop", "Desktop"],
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    department: "Marketing",
    avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp",
    country: "Canada",
    email: "john.doe@example.com",
    address: "123 Elm Street, Springfield, IL",
    mobile: "+1 555-123-4567",
    dateOfJoining: "2020-01-15",
    salary: "$80,000",
    equipmentsIssued: ["Laptop", "Desktop"],
  },
  {
    id: 3,
    name: "Alice Johnson",
    position: "UX Designer",
    department: "Design",
    avatar: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    country: "United Kingdom",
    email: "john.doe@example.com",
    address: "123 Elm Street, Springfield, IL",
    mobile: "+1 555-123-4567",
    dateOfJoining: "2020-01-15",
    salary: "$80,000",
    equipmentsIssued: ["Laptop", "Desktop"],
  },
  {
    id: 4,
    name: "Bob Brown",
    position: "Backend Developer",
    department: "Engineering",
    avatar: "https://img.daisyui.com/images/profile/demo/5@94.webp",
    country: "Australia",
    email: "john.doe@example.com",
    address: "123 Elm Street, Springfield, IL",
    mobile: "+1 555-123-4567",
    dateOfJoining: "2020-01-15",
    salary: "$80,000",
    equipmentsIssued: ["Laptop", "Desktop"],
  },
  // Add more employees as needed, up to 20
  {
    id: 5,
    name: "Charlie Davis",
    position: "Data Scientist",
    department: "Data",
    avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    country: "Germany",
    email: "john.doe@example.com",
    address: "123 Elm Street, Springfield, IL",
    mobile: "+1 555-123-4567",
    dateOfJoining: "2020-01-15",
    salary: "$80,000",
    equipmentsIssued: ["Laptop", "Desktop"],
  },
  {
    id: 6,
    name: "David Evans",
    position: "Frontend Developer",
    department: "Development",
    avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp",
    country: "France",
    email: "john.doe@example.com",
    address: "123 Elm Street, Springfield, IL",
    mobile: "+1 555-123-4567",
    dateOfJoining: "2020-01-15",
    salary: "$80,000",
    equipmentsIssued: ["Laptop", "Desktop"],
  },
  {
    id: 7,
    name: "Eva Green",
    position: "HR Manager",
    department: "HR",
    avatar: "https://img.daisyui.com/images/profile/demo/8@94.webp",
    country: "Italy",
    email: "john.doe@example.com",
    address: "123 Elm Street, Springfield, IL",
    mobile: "+1 555-123-4567",
    dateOfJoining: "2020-01-15",
    salary: "$80,000",
    equipmentsIssued: ["Laptop", "Desktop"],
  },
  {
    id: 8,
    name: "Frank Harris",
    position: "Project Coordinator",
    department: "Operations",
    avatar: "https://img.daisyui.com/images/profile/demo/9@94.webp",
    country: "Spain",
    email: "john.doe@example.com",
    address: "123 Elm Street, Springfield, IL",
    mobile: "+1 555-123-4567",
    dateOfJoining: "2020-01-15",
    salary: "$80,000",
    equipmentsIssued: ["Laptop", "Desktop"],
  },
  {
    id: 9,
    name: "Grace Lee",
    position: "Sales Executive",
    department: "Sales",
    avatar: "https://img.daisyui.com/images/profile/demo/10@94.webp",
    country: "Netherlands",
    email: "john.doe@example.com",
    address: "123 Elm Street, Springfield, IL",
    mobile: "+1 555-123-4567",
    dateOfJoining: "2020-01-15",
    salary: "$80,000",
    equipmentsIssued: ["Laptop", "Desktop"],
  },
  {
    id: 10,
    name: "Hannah Moore",
    position: "Content Writer",
    department: "Content",
    avatar: "https://img.daisyui.com/images/profile/demo/11@94.webp",
    country: "Sweden",
    email: "john.doe@example.com",
    address: "123 Elm Street, Springfield, IL",
    mobile: "+1 555-123-4567",
    dateOfJoining: "2020-01-15",
    salary: "$80,000",
    equipmentsIssued: ["Laptop", "Desktop"],
  },
];

const EmployeeList = () => {
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [selectedEmployee, setSelectedEmployee] = useState(null); // State for selected employee
  const { theme } = useContext(ThemeContext);

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

  const handleViewClick = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleCloseModal = () => {
    setSelectedEmployee(null);
  };

  return (
    <div
      className={`gap-4 p-4 rounded-lg w-full ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div
        className={`shadow-md z-10 flex md:flex-row flex-col items-center justify-between p-4 rounded-lg ${
          theme === "dark"
            ? "bg-gray-900 text-gray-200"
            : "bg-white text-gray-800"
        }`}
      >
        <h1 className="text-2xl mb-4 md:mb-0">Employees</h1>
        <SearchFilter onFilterChange={handleFilterChange} />
      </div>
      <div
        className={`overflow-x-auto mt-4 ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <table
          className={`table w-full border border-gray-200 ${
            theme === "dark"
              ? "bg-gray-900 text-gray-300"
              : "bg-white text-gray-800"
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
      {selectedEmployee && (
        <EmployeeModal employee={selectedEmployee} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default EmployeeList;
