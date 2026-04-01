import React from "react";
import { useContext } from "react";
import { CounterContext } from "../contexts/CounterProvider";

const UpdateCounter = () => {
  const { increment, decrement } = useContext(CounterContext);
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default UpdateCounter;
