import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  //   function Increment() {
  //     if (count < 10) {
  //       setCount(count + 1);
  //     }
  //   }
  //   function Decrement() {
  //     if (count > 0) {
  //       setCount(count - 1);
  //     }
  //   }
  function Increment() {
    if (count < 10) {
      setCount(count + 1);
    }
  }
  function Decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
