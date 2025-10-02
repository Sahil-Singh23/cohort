import { useRef } from "react";

export const useDebounce = (fn) => {
  const timer = useRef();

  const ret = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(fn, 150);
  };
  return ret;
};
