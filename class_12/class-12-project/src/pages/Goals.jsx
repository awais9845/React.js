import React from "react";
import { GiFlyingTarget } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";

const Goals = () => {
  const today = new Date();
  const Month = today.getMonth() + 1;
  const Year = today.getFullYear();

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm mx-auto">
      {/* Main Goal */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">$20,000</h1>
          <div className="flex gap-2 text-gray-500 text-sm">
            <p>{Month}</p>
            <p>{Year}</p>
          </div>
        </div>
        <GiFlyingTarget className="text-3xl text-blue-500" />
      </div>

      {/* Target Achieved */}
      <div className="flex items-center gap-3 mb-6 bg-blue-50 p-3 rounded-lg">
        <GiFlyingTarget className="text-xl text-blue-500" />
        <p className="text-blue-700 font-medium">Target Achieved</p>
      </div>

      {/* This Month Target */}
      <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center gap-3">
          <TbTargetArrow className="text-2xl text-green-500" />
          <div>
            <p className="text-gray-500 text-sm">This Month Target</p>
            <h1 className="text-lg font-semibold text-gray-800">$20,000</h1>
          </div>
        </div>
        <div className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-lg">
          12k
        </div>
      </div>
    </div>
  );
};

export default Goals;
