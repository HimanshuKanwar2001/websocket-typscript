import { useEffect, useRef } from "react";

const usePrev = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
export default usePrev;
