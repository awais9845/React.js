import React from "react";
import { GrTransaction } from "react-icons/gr";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const Transactions = () => {
  const totalTransactions = 15000; // total money transacted
  const monthlyTarget = 20000; // target for the month
  const percentage = Math.round((totalTransactions / monthlyTarget) * 100);
  const transactionCount = 45; // number of transactions this month

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm mx-auto">
      {/* Total Transactions */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            ${totalTransactions.toLocaleString()}
          </h1>
          <p className="text-gray-500 text-sm">Total Transactions</p>
        </div>
        <GrTransaction className="text-3xl text-blue-500" />
      </div>

      {/* Transactions Trend */}
      <div className="flex items-center gap-3 mb-6 bg-blue-50 p-3 rounded-lg">
        <AiOutlineArrowUp className="text-xl text-green-500" />
        <AiOutlineArrowDown className="text-xl text-red-500" />
        <p className="text-blue-700 font-medium">
          {transactionCount} Transactions This Month
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <p className="text-gray-500 text-sm">Monthly Target</p>
          <p className="text-gray-700 font-medium">{percentage}%</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      {/* Transactions Summary */}
      <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center gap-3">
          <AiOutlineArrowUp className="text-2xl text-green-500" />
          <div>
            <p className="text-gray-500 text-sm">Completed</p>
            <h1 className="text-lg font-semibold text-gray-800">
              ${(totalTransactions * 0.8).toLocaleString()}
            </h1>
          </div>
        </div>
        <div className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-lg">
          {transactionCount} Tx
        </div>
      </div>
    </div>
  );
};

export default Transactions;
