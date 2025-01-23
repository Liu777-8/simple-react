import React, { useState, useReducer } from "react";
import { useStorage } from "../../../hooks/useStorage";

const simpleHook = (props) => {
  const { value, callBack } = props;
  function reducer(state, action) {
    console.log("hsjalog----", state, action);
    if (action.type === "increment") {
      return state + 1;
    } else if (action.type === "decrement") {
      return state - 1;
    } else if (action.type === "reset") {
      return 0;
    }
    return state;
  }
  const [count, dispatch] = useReducer(reducer, 0, () => {
    return 22;
  });
  const [storage, setStorage] = useStorage("hsjalog", 0);
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => callBack && callBack(value + 1)}>点我</button>
      <h2>useReducer的使用</h2>
      <h3>{count}</h3>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <h2>useStorage的使用</h2>
      <h3>{storage}</h3>
      <button onClick={() => setStorage(storage + 1)}>+</button>
    </div>
  );
};
export default simpleHook;
