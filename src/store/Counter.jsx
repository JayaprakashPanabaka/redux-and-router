import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

import { increment, decrement, reset } from "./actions";

const Counter = () => {
  const [count, setCount] = useState(0);

  const counter = useSelector((state) => {
    return state;
  });

  const dispatcher = useDispatch();

  //   console.log(counter);

//   const handleAsync = () => {
//     dispatcher(asyncFun(10))
//   }
  return (
    <div>
      <h2>Counter</h2>
      <h1>Count: {counter}</h1>
      <div>
        <button onClick={() => dispatcher(increment())}>
            INCREMENT
        </button>
        <button onClick={() => dispatcher(reset())}>
            RESET
        </button>
        <button onClick={() => dispatcher(decrement())}>
            DECREMENT
        </button>
      </div>
      {/* <button onClick={handleAsync}>Async ADD 10</button> */}
    </div>
  );
};

export default Counter;
