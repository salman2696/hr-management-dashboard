import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const LeaveManagement = () => {
  const { theme } = useContext(ThemeContext);
  const [leaveType, setLeaveType] = useState("");
  const [leaveStart, setLeaveStart] = useState("");
  const [leaveEnd, setLeaveEnd] = useState("");
  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 1,
      type: "Sick Leave",
      start: "2024-07-15",
      end: "2024-07-17",
      status: "Approved",
    },
    {
      id: 2,
      type: "Annual Leave",
      start: "2024-08-01",
      end: "2024-08-10",
      status: "Pending",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLeaveRequests([
      ...leaveRequests,
      {
        id: leaveRequests.length + 1,
        type: leaveType,
        start: leaveStart,
        end: leaveEnd,
        status: "Pending",
      },
    ]);
    setLeaveType("");
    setLeaveStart("");
    setLeaveEnd("");
  };

  return (
    <div
      className={`p-6 w-full rounded-xl shadow-md ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Leave Summary */}
      <div
        className={`mb-6 p-4 rounded-lg shadow-sm  ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        <h3 className="text-xl font-medium mb-2">Leave Balances</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            className={`p-4 rounded-lg shadow ${
              theme === "dark"
                ? "bg-gray-900 text-gray-300"
                : "bg-white text-gray-700"
            }`}
          >
            <h4 className="text-lg font-semibold">Sick Leave</h4>
            <p className="text-gray-600">10 days available</p>
          </div>
          <div
            className={`p-4 rounded-lg shadow ${
              theme === "dark"
                ? "bg-gray-900 text-gray-300"
                : "bg-white text-gray-700"
            }`}
          >
            <h4 className="text-lg font-semibold">Annual Leave</h4>
            <p className="text-gray-600">15 days available</p>
          </div>
          <div
            className={`p-4 rounded-lg shadow ${
              theme === "dark"
                ? "bg-gray-900 text-gray-300"
                : "bg-white text-gray-700"
            }`}
          >
            <h4 className="text-lg font-semibold">Casual Leave</h4>
            <p className="text-gray-600">5 days available</p>
          </div>
        </div>
      </div>

      {/* Leave Request Form */}
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-2">Request New Leave</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="leaveType" className="block text-gray-600">
              Leave Type
            </label>
            <select
              id="leaveType"
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              className={`w-full mt-1 p-2 border rounded-md ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 text-gray-300"
                  : " bg-white text-gray-600 border-gray-300"
              }`}
              required
            >
              <option value="">Select Leave Type</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Annual Leave">Annual Leave</option>
              <option value="Casual Leave">Casual Leave</option>
            </select>
          </div>
          <div>
            <label htmlFor="leaveStart" className="block text-gray-600">
              Start Date
            </label>
            <input
              type="date"
              id="leaveStart"
              value={leaveStart}
              onChange={(e) => setLeaveStart(e.target.value)}
              className={`w-full mt-1 p-2 border rounded-md ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 text-gray-300"
                  : " bg-white text-gray-600 border-gray-300"
              }`}
              required
            />
          </div>
          <div>
            <label htmlFor="leaveEnd" className="block text-gray-600">
              End Date
            </label>
            <input
              type="date"
              id="leaveEnd"
              value={leaveEnd}
              onChange={(e) => setLeaveEnd(e.target.value)}
              className={`w-full mt-1 p-2 border rounded-md ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600 text-gray-300"
                  : " bg-white text-gray-600 border-gray-300"
              }`}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full p-2 rounded-md ${
              theme === "dark"
                ? " bg-red-400 rounded-md hover:bg-red-500"
                : "bg-red-400 hover:bg-red-500 text-white"
            } `}
          >
            Submit Request
          </button>
        </form>
      </div>

      {/* Leave Requests Table */}
      <div>
        <h3 className="text-xl font-medium mb-2">Leave Requests</h3>
        <table
          className={`w-full border border-gray-200 rounded-lg ${
            theme === "dark"
              ? "bg-gray-700 text-gray-300"
              : "bg-white text-gray-800"
          }`}
        >
          <thead
            className={`${theme === "dark" ? "bg-gray-600" : "bg-gray-100"}`}
          >
            <tr>
              <th className="p-2 text-left">Type</th>
              <th className="p-2 text-left">Start Date</th>
              <th className="p-2 text-left">End Date</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((request) => (
              <tr key={request.id} className="border-t">
                <td className="p-2">{request.type}</td>
                <td className="p-2">{request.start}</td>
                <td className="p-2">{request.end}</td>
                <td className="p-2">{request.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveManagement;
