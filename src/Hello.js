import React, { useRef, useEffect, useState } from "react";
import { useFetch } from "./useFetch";

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

  const renders = useRef(0);

  console.log("hello renders:", renders.current++);

  return (
    <div>
      <div>Hello comp</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
      <div>{!data ? "loading...." : data}</div>
    </div>
  );
};
