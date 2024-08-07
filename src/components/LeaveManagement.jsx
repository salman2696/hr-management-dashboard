import React, { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// Sample leave data
const leaveRequests = [
  {
    id: 1,
    employeeId: 1,
    startDate: "2024-08-15",
    endDate: "2024-08-20",
    reason: "Medical Leave",
    status: "Pending",
  },
  {
    id: 2,
    employeeId: 2,
    startDate: "2024-08-22",
    endDate: "2024-08-25",
    reason: "Vacation",
    status: "Pending",
  },
  {
    id: 3,
    employeeId: 3,
    startDate: "2024-08-30",
    endDate: "2024-09-05",
    reason: "Personal Leave",
    status: "Approved",
  },
];

// Sample employee data
const employees = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    department: "IT",
    avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    department: "Marketing",
    avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp",
  },
  {
    id: 3,
    name: "Alice Johnson",
    position: "UX Designer",
    department: "Design",
    avatar: "https://img.daisyui.com/images/profile/demo/4@94.webp",
  },
  // Add more employees as needed
];

const LeaveManagement = () => {
  const { theme } = useContext(ThemeContext);

  // Helper function to get employee details by ID
  const getEmployeeById = (id) => {
    return employees.find((employee) => employee.id === id);
  };

  return (
    <div
      className={`p-6 rounded-xl min-h-screen shadow-lg ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <h1 className="text-2xl font-semibold mb-6">Leave Management</h1>

      {/* Leave Requests Table */}
      <div className="overflow-x-auto">
        <table
          className={`w-full border border-gray-200 hidden lg:table lg: ${
            theme === "dark"
              ? "bg-gray-900 text-gray-300"
              : "bg-white text-gray-800"
          }`}
        >
          <thead
            className={`${
              theme === "dark"
                ? "bg-gray-800 text-gray-300"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <tr>
              <th className="py-2 px-4 border-b hidden sm:table-cell">
                Employee
              </th>
              <th className="py-2 px-4 border-b hidden sm:table-cell">
                Start Date
              </th>
              <th className="py-2 px-4 border-b hidden sm:table-cell">
                End Date
              </th>
              <th className="py-2 px-4 border-b hidden sm:table-cell">
                Reason
              </th>
              <th className="py-2 px-4 border-b hidden sm:table-cell">
                Status
              </th>
              <th className="py-2 px-4 border-b hidden sm:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          <tbody
            className={`${
              theme === "dark"
                ? "bg-gray-800 text-gray-300"
                : "bg-white text-gray-800"
            }`}
          >
            {leaveRequests.map((request) => {
              const employee = getEmployeeById(request.employeeId);
              return (
                <tr key={request.id} className="border-b">
                  <td className="py-2 px-4">
                    <div className="flex flex-row">
                      <img
                        src={employee.avatar}
                        alt={`${employee.name}'s Avatar`}
                        className="w-12 h-12 rounded-full mt-2"
                      />
                      <div className="flex flex-col ml-3">
                        <div className="font-bold">{employee.name}</div>
                        <div className="text-sm text-gray-600">
                          {employee.position}
                        </div>
                        <div className="text-sm text-gray-500">
                          {employee.department}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-4">
                    <div className="flex flex-col">
                      <div className="font-bold">Start Date</div>
                      <div>{request.startDate}</div>
                    </div>
                  </td>
                  <td className="py-2 px-4">
                    <div className="flex flex-col">
                      <div className="font-bold">End Date</div>
                      <div>{request.endDate}</div>
                    </div>
                  </td>
                  <td className="py-2 px-4">
                    <div className="flex flex-col">
                      <div className="font-bold">Reason</div>
                      <div>{request.reason}</div>
                    </div>
                  </td>
                  <td className="py-2 px-4">
                    <div className="flex flex-col">
                      <div className="font-bold">Status</div>
                      <div>{request.status}</div>
                    </div>
                  </td>
                  <td className="py-2 px-4">
                    {request.status === "Pending" ? (
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            console.log(
                              `Approved leave request with ID: ${request.id}`
                            )
                          }
                          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() =>
                            console.log(
                              `Rejected leave request with ID: ${request.id}`
                            )
                          }
                          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <span className="text-gray-500">N/A</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Mobile View */}
        <div className="block lg:hidden">
          {leaveRequests.map((request) => {
            const employee = getEmployeeById(request.employeeId);
            return (
              <div
                key={request.id}
                className="mb-4 p-4 border rounded-lg shadow-md"
              >
                <div className="flex flex-row gap-1 mb-4">
                  <img
                    src={employee.avatar}
                    alt={`${employee.name}'s Avatar`}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col ml-2">
                    <div className="font-bold">{employee.name}</div>
                    <div className="text-sm text-gray-600">
                      {employee.position}
                    </div>
                    <div className="text-sm text-gray-500">
                      {employee.department}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mb-4">
                  <div className="font-bold">Start Date</div>
                  <div>{request.startDate}</div>
                </div>
                <div className="flex flex-col gap-2 mb-4">
                  <div className="font-bold">End Date</div>
                  <div>{request.endDate}</div>
                </div>
                <div className="flex flex-col gap-2 mb-4">
                  <div className="font-bold">Reason</div>
                  <div>{request.reason}</div>
                </div>
                <div className="flex flex-col gap-2 mb-4">
                  <div className="font-bold">Status</div>
                  <div>{request.status}</div>
                </div>
                {request.status === "Pending" && (
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        console.log(
                          `Approved leave request with ID: ${request.id}`
                        )
                      }
                      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() =>
                        console.log(
                          `Rejected leave request with ID: ${request.id}`
                        )
                      }
                      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeaveManagement;
