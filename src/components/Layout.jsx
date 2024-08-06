import { Outlet } from 'react-router-dom';
import React, { useContext } from "react";
import Sidebar from './Sidebar'; // Adjust the path according to your file structure
import Header from './Header'; // Adjust the path according to your file structure
import { ThemeContext } from './ThemeContext';

const Layout = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <>
      <Sidebar />
        <Header />
        <main className={`dashboard-page lg:ml-[20%] p-4 mt-16 ${
        theme === "dark"
          ? "bg-gray-800 text-gray-300"
          : "bg-[#f6f7f9] text-black"
      }`}>
          <Outlet />
        </main>
    </>
  );
};

export default Layout;
