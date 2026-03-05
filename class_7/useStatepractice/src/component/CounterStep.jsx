import React, { useState } from "react";

const CounterStep = () => {
  const [count, setCount] = useState(0);
  //   for counting
  const Increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  function Increment5() {
    setCount(count + 5);
  }
  function Increment10() {
    setCount(count + 10);
  }
  return (
    <div>
      <button>{count}</button>
      <div className="flex gap-6">
        <button onClick={Increment}>Increase Count</button>
        <button onClick={Decrement}>Decrease Count</button>
        <button onClick={Increment5}>Increase 5</button>
        <button onClick={Increment10}>Increase 10</button>
      </div>
    </div>
  );
};

export default CounterStep;
