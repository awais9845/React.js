import React from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";

const Bills = () => {
  const today = new Date();
  const Month = today.getMonth() + 1;
  const Year = today.getFullYear();

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm mx-auto">
      {/* Total Bills */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">$5,500</h1>
          <div className="flex gap-2 text-gray-500 text-sm">
            <p>{Month}</p>
            <p>{Year}</p>
          </div>
        </div>
        <FaMoneyBillWave className="text-3xl text-yellow-500" />
      </div>

      {/* Bills Paid */}
      <div className="flex items-center gap-3 mb-6 bg-yellow-50 p-3 rounded-lg">
        <MdPayment className="text-xl text-yellow-500" />
        <p className="text-yellow-700 font-medium">Bills Paid</p>
      </div>

      {/* This Month Bills */}
      <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center gap-3">
          <GiTakeMyMoney className="text-2xl text-red-500" />
          <div>
            <p className="text-gray-500 text-sm">This Month Bills</p>
            <h1 className="text-lg font-semibold text-gray-800">$5,500</h1>
          </div>
        </div>
        <div className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-lg">
          3k
        </div>
      </div>
    </div>
  );
};

export default Bills;
