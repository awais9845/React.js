import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="w-[20%] border ">
        <Sidebar />
      </div>
      <div className="w-[80%] flex justify-center items-center bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
