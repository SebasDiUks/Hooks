import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

export const CounterWithCustomHook = () => {
  const { counter, incrementar, decrementar, reset } = useCounter(18);
  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />
      <button className="btn" onClick={() => incrementar(1)}>
        +
      </button>
      <button className="btn" onClick={() => decrementar(1)}>
        -
      </button>
      <button className="btn" onClick={reset}>
        Reset
      </button>
    </>
  );
};
