import React from "react";
import Adminsidebar from "../sidebars/Adminsidebar";

import Dashboard from "../Dashboard";

const Adminlayout = () => {
  return (
    <div className="w-full">
      <Adminsidebar />
      <div className="w-[80%]">
        <Dashboard />
      </div>
    </div>
  );
};

export default Adminlayout;
