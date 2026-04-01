import React from "react";
import { Links } from "./Links";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen justify-between  py-5 px-3">
      <div className="flex flex-col gap-8">
        <div className="border-b">
          <h1 className="text-2xl font-semibold text-center">Finebank LO</h1>
        </div>
        <div className=" flex flex-col gap-5">
          {Links.map((item, index) => (
            <Link key={index} to={item.path}>
              <div className="flex items-center  gap-5">
                <item.icon className="text-xl" />
                <span className="font-semibold">{item.link}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <div className="flex gap-2 border p-2 w-full text-center justify-center rounded-xl items-center ">
          <IoIosLogOut />
          <button>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
