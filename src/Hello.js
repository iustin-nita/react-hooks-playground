import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { useFetch } from "./useFetch";
import { useMeasure } from "./useMeasure";

export const Hello = () => {
  useEffect(() => {
    console.log("render");
    return () => {
      console.log("cwunmount");
    };
  }, []);

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count}`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  // const renders = useRef(0);

  const [rect, divRef] = useMeasure([data]);
  // const [rect, setRect] = useState({});

  // console.log("hello renders:", renders.current++);

  // useLayoutEffect(() => {
  //   console.log(
  //     "hello useLayoutEffect",
  //     divRef.current.getBoundingClientRect()
  //   );
  //   setRect(divRef.current.getBoundingClientRect());
  // }, [data]);

  return (
    <div>
      <div>Hello comp</div>
      <div>count: {count}</div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{!data ? "loading...." : data}</div>
      </div>
    </div>
  );
};
