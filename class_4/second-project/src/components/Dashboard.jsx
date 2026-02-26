import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = ({ children }) => {
  return (
    <div className="flex w-full">
      <div className="w-[20%] h-screen ">
        <Sidebar />
      </div>
      <div className="w-[80%]">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
