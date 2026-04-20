import React, { useState } from "react";
import { useReducer } from "react";
const initialstate = {
  count: 0,
  state: "active",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...initialstate,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...initialstate,
        count: state.count - 1,
      };
  }
};

const Counter = () => {
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Incremet</button>
      <br />
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default Counter;
