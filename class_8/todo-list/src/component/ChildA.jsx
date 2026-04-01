import React, { useState } from "react";

// 🔵 Sibling 1 (updates data)
const ChildA = ({ count, setCount }) => {
  return (
    <div>
      <h3>Child A (Sibling 1)</h3>
      <button className="border gap-1 m-5 " onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
};

export default ChildA;
