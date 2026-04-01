import React from "react";

import Dashboard from "../Dashboard";
import Usersidebar from "../sidebars/Usersidebar";

const Userlayout = () => {
  return (
    <div className="w-full">
      <Usersidebar />
      <div className="w-[80%]">
        <Dashboard role={role} />
      </div>
    </div>
  );
};

export default Userlayout;
