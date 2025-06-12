import { useRef } from "react";

export const useDebounce = () => {
  const timeoutRef = useRef(null);

  const debounce = (callback, delay) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback();
    }, delay);
  };

  return debounce;
};

export default useDebounce;
