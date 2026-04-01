import React from "react";
import Balance from "./Balance";
import Goals from "./Goals";
import Bills from "./Bills";
import Transactions from "./Transaction";
import Expenses from "./Expenses";

const Overview = () => {
  return (
    <div className="flex w-full flex-col gap-1 p-1">
      <div className="flex gap-5 w-full">
        <Goals />
        <Bills />
      </div>
    </div>
  );
};

export default Overview;
