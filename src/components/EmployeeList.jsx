// src/components/EmployeeList.jsx
import React from "react";

// Sample employee data
const employees = [
  { id: 1, name: "John Doe", position: "Software Engineer", department: "IT", avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp", country: "United States" },
  { id: 2, name: "Jane Smith", position: "Product Manager", department: "Marketing", avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp", country: "Canada" },
  { id: 3, name: "Alice Johnson", position: "UX Designer", department: "Design", avatar: "https://img.daisyui.com/images/profile/demo/4@94.webp", country: "United Kingdom" },
  { id: 4, name: "Bob Brown", position: "Backend Developer", department: "Engineering", avatar: "https://img.daisyui.com/images/profile/demo/5@94.webp", country: "Australia" },
  // Add more employees as needed, up to 20
  { id: 5, name: "Charlie Davis", position: "Data Scientist", department: "Data", avatar: "https://img.daisyui.com/images/profile/demo/6@94.webp", country: "Germany" },
  { id: 6, name: "David Evans", position: "Frontend Developer", department: "Development", avatar: "https://img.daisyui.com/images/profile/demo/7@94.webp", country: "France" },
  { id: 7, name: "Eva Green", position: "HR Manager", department: "HR", avatar: "https://img.daisyui.com/images/profile/demo/8@94.webp", country: "Italy" },
  { id: 8, name: "Frank Harris", position: "Project Coordinator", department: "Operations", avatar: "https://img.daisyui.com/images/profile/demo/9@94.webp", country: "Spain" },
  { id: 9, name: "Grace Lee", position: "Sales Executive", department: "Sales", avatar: "https://img.daisyui.com/images/profile/demo/10@94.webp", country: "Netherlands" },
  { id: 10, name: "Hannah Moore", position: "Content Writer", department: "Content", avatar: "https://img.daisyui.com/images/profile/demo/11@94.webp", country: "Sweden" },
  { id: 11, name: "Ian Nelson", position: "Network Engineer", department: "IT", avatar: "https://img.daisyui.com/images/profile/demo/12@94.webp", country: "Norway" },
  { id: 12, name: "Jack O'Connor", position: "Customer Support", department: "Support", avatar: "https://img.daisyui.com/images/profile/demo/13@94.webp", country: "Denmark" },
  { id: 13, name: "Karen Parker", position: "Business Analyst", department: "Analysis", avatar: "https://img.daisyui.com/images/profile/demo/14@94.webp", country: "Switzerland" },
  { id: 14, name: "Leo Quinn", position: "SEO Specialist", department: "Marketing", avatar: "https://img.daisyui.com/images/profile/demo/15@94.webp", country: "Austria" },
  { id: 15, name: "Mia Roberts", position: "Graphic Designer", department: "Design", avatar: "https://img.daisyui.com/images/profile/demo/16@94.webp", country: "Belgium" },
  { id: 16, name: "Noah Scott", position: "Database Administrator", department: "Data", avatar: "https://img.daisyui.com/images/profile/demo/17@94.webp", country: "Portugal" },
  { id: 17, name: "Olivia Taylor", position: "Social Media Manager", department: "Marketing", avatar: "https://img.daisyui.com/images/profile/demo/18@94.webp", country: "Ireland" },
  { id: 18, name: "Paul Upton", position: "DevOps Engineer", department: "Engineering", avatar: "https://img.daisyui.com/images/profile/demo/19@94.webp", country: "Finland" },
  { id: 19, name: "Quinn Vance", position: "Product Designer", department: "Design", avatar: "https://img.daisyui.com/images/profile/demo/20@94.webp", country: "Poland" },
  { id: 20, name: "Riley Walker", position: "Market Researcher", department: "Marketing", avatar: "https://img.daisyui.com/images/profile/demo/21@94.webp", country: "Czech Republic" },
];

const EmployeeList = () => (
  <div className="overflow-x-auto p-4 w-full text-center">
    <h1 className="text-2xl font-bold mb-4 text-gray-800">Employees</h1>
    <table className="table w-full bg-white border border-gray-200 ">
      <thead className="text-gray-700">
        <tr>
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Position</th>
          <th className="py-2 px-4 border-b">Department</th>
          <th className="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody className="text-gray-500">
        {employees.map((employee) => (
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
                  <div className="text-sm opacity-50">{employee.country}</div>
                </div>
              </div>
            </td>
            <td className="py-2 px-4 border-b">{employee.position}</td>
            <td className="py-2 px-4 border-b">{employee.department}</td>
            <td className="py-2 px-4 border-b">
              <button className="btn btn-ghost btn-xs">View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default EmployeeList;
