import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [color, setColor] = useState(false);
  return (
    <div className="flex h-screen">
      <div className="w-[20%] border ">
        <Sidebar />
        console.log("sidebar")
      </div>
      <div
        className="w-[80%] flex justify-center items-center bg-gray-100"
        style={{
          color: color ? "white" : "black",
          backgroundColor: color ? "black" : "white",
        }}
      >
        <button onClick={() => setColor(!color)}>Change Theme</button>
        {/* <Outlet /> */}
        
          <Outlet />;
        
        
      </div>
    </div>
  );
};

export default DashboardLayout;
