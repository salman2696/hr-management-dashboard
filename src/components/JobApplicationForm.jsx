import React, { useState } from "react";

const JobApplicationForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onFormSubmit callback to handle the form data
    onFormSubmit(formData);
    // Optionally reset the form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      resume: null,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="file"
        name="resume"
        onChange={handleFileChange}
        required
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit Application
      </button>
    </form>
  );
};

export default JobApplicationForm;
