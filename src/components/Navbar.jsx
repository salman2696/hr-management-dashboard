// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="fixed top-0 left-64 w-full bg-gray-200 text-gray-800 z-50 width">
    <div className="container mx-auto flex items-center justify-between p-4">
      <h1 className="text-3xl font-bold">Employee Dashboard</h1>
    </div>
  </div>
);

export default Navbar;
