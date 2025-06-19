import { useEffect, useRef, useState } from "react";

const useDebounce = (fetchFn, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(fetchFn);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(fetchFn);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [fetchFn, delay]);
  //   const fn = () => {
  //     clearTimeout(currentClock.current);
  //     currentClock.current = setTimeout(fetchFn, 300);
  //   };

  //   return fn;
  return debouncedValue;
};
export default useDebounce;
