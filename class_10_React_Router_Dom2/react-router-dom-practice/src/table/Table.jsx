import React, { Children } from "react";

const Table = ({ children }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-left rounded-md ">
        {children}
      </table>
    </div>
  );
};

export default Table;
