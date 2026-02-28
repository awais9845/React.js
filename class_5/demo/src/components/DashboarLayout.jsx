import React, { Children } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const DashboarLayout = ({ children }) => {
  return (
    <div className="flex w-full ">
      <div className="w-[20%] h-screen  border">
        <Sidebar />
      </div>
      <div className=" h-screen   w-[80%]">
        <div className="h-[10vh]">
          <Navbar />
        </div>
        <div className="h-[90vh] m-1 overflow-hidden overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboarLayout;
