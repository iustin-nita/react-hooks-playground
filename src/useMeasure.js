import { useLayoutEffect, useState, useRef } from "react";
export const useMeasure = deps => {
  const [rect, setRect] = useState({});
  const myRef = useRef();
  // const divRef = useRef();
  useLayoutEffect(() => {
    console.log("hello useLayoutEffect", myRef.current.getBoundingClientRect());
    setRect(myRef.current.getBoundingClientRect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [rect, myRef];
};
