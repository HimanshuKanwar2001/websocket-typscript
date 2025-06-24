import { useState } from "react";


export default function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((prev) => prev + 1);
  }

  return {
    count: count,
    increaseCount: increaseCount,
  };
}
