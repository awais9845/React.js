import React from "react";
import { Link } from "react-router-dom";

const Usersidebar = () => {
  return (
    <div className="flex flex-col border items-center p-5 justify-between w-[20%] h-screen">
      <h1 className="border-b border-b-blue-600">Admin Dashbord</h1>
      <ul className="flex flex-col gap-5">
        <Link className="border p-1 rounded px-5" to="/">
          Home
        </Link>
        <Link className="border p-1 rounded px-5" to="/help">
          Help
        </Link>
        <Link className="border p-1 rounded px-5" to="about">
          About
        </Link>
      </ul>
      <button
        className="border p-1 rounded px-5"
        onlick={() => {
          localStorage.clear("user");
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Usersidebar;
