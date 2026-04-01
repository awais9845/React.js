import React from "react";

const Balance = () => {
  return (
    <div className=" border p-4 w-[30%] bg-white rounded-2xl">
      <div className="flex justify-between">
        <h1>24009</h1>
        <p>All Accounts</p>
      </div>
      <div className="flex justify-between items-end bg-[#b2c4b2e7] p-4 rounded-lg">
        <div>
          <p>Account Type</p>
          <h4>Credit Card</h4>
          <p>****************234</p>
        </div>
        <div>$25000</div>
      </div>
      <div>Next</div>
    </div>
  );
};

export default Balance;
