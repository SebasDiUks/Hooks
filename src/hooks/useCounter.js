import { useState } from "react";

export const useCounter = (initialState = 0) => {
  const [counter, setCounter] = useState(initialState);
  const incrementar = (factor = 1) => {
    setCounter(counter + factor);
  };
  const decrementar = (factor = 1) => {
    setCounter(counter - factor);
  };
  const reset = () => {
    setCounter(initialState);
  };

  return {
    counter,
    incrementar,
    decrementar,
    reset,
  };
};
