import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../features/CounterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default Counter;
