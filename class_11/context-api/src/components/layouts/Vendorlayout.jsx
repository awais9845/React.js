import React from "react";

import Dashboard from "../Dashboard";
import Vendorsidebar from "../sidebars/Vendorsidebar";

const Vendorlayout = () => {
  return (
    <div className="w-full">
      <Vendorsidebar />
      <div className="w-[80%]">
        <Dashboard />
      </div>
    </div>
  );
};

export default Vendorlayout;
