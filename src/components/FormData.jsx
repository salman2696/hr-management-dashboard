import React, { useState } from "react";
import JobApplicationForm from "./JobApplicationForm";

const JobApplicationsPage = () => {
  const [applications, setApplications] = useState([]);

  const handleFormSubmit = (data) => {
    // Store the form data in the state
    setApplications((prevApplications) => [...prevApplications, data]);
  };

  return (
    <div>
      <h1>Job Application</h1>
      <JobApplicationForm onFormSubmit={handleFormSubmit} />

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Submitted Applications</h2>
        <ul className="space-y-4">
          {applications.map((app, index) => (
            <li key={index} className="p-4 border rounded">
              <h3 className="text-lg font-medium">{app.name}</h3>
              <p>Email: {app.email}</p>
              <p>Phone: {app.phone}</p>
              {/* Add more details as needed */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobApplicationsPage;
