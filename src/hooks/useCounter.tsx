import { useState } from "react";

export const useCounter = (initialValue: number = 0) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const increase = () => setCounter(() => counter + 1);
  const decrease = () => setCounter(counter - 1);
  const reset = () => setCounter(initialValue);

  return {
    counter,
    increase,
    decrease,
    reset,
  };
};
