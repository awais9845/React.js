import React from "react";
import { LuCircleDollarSign } from "react-icons/lu";
import { BiMoneyWithdraw } from "react-icons/bi";
import { RiWallet3Line } from "react-icons/ri";

const Expenses = () => {
  const totalExpenses = 8200;
  const monthlyTarget = 10000;
  const percentage = Math.round((totalExpenses / monthlyTarget) * 100);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm mx-auto">
      {/* Total Expenses */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            ${totalExpenses.toLocaleString()}
          </h1>
          <p className="text-gray-500 text-sm">Total Expenses</p>
        </div>
        <LuCircleDollarSign className="text-3xl text-purple-500" />
      </div>

      {/* Expenses Paid */}
      <div className="flex items-center gap-3 mb-6 bg-purple-50 p-3 rounded-lg">
        <BiMoneyWithdraw className="text-xl text-purple-500" />
        <p className="text-purple-700 font-medium">Paid This Month</p>
      </div>

      {/* Expenses Progress */}
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <p className="text-gray-500 text-sm">Monthly Target</p>
          <p className="text-gray-700 font-medium">{percentage}%</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-purple-500 h-2 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      {/* This Month Expenses */}
      <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center gap-3">
          <RiWallet3Line className="text-2xl text-red-500" />
          <div>
            <p className="text-gray-500 text-sm">Remaining Budget</p>
            <h1 className="text-lg font-semibold text-gray-800">
              ${(monthlyTarget - totalExpenses).toLocaleString()}
            </h1>
          </div>
        </div>
        <div className="bg-red-100 text-red-700 font-bold px-3 py-1 rounded-lg">
          6k
        </div>
      </div>
    </div>
  );
};

export default Expenses;
