import React from "react";

const Sidebar = () => {
  return (
    <div className=" flex justify-center items-center h-full border">
      <ul className="flex flex-col justify-center items-center gap-7">
        <li>Home</li>
        <li>About</li>
        <li>Help</li>
      </ul>
    </div>
  );
};

export default Sidebar;
