import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useForm } from "./useForm";
import { Hello } from "./Hello";
import { useFetch } from "./useFetch";
import { useMeasure } from "./useMeasure";

// function expensiveInitialState() {
//   return {
//     count1: 10,
//     count2: 20
//   };
// }

const App = () => {
  // const [{ count1, count2 }, setCount] = useState(() =>
  //   expensiveInitialState()
  // );
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [values, handleChange] = useForm({ email: "", password: "" });

  const [showHello, setShowHello] = useState(true);

  // useEffect(() => {
  //   console.log("render");
  //   const onMouseMove = e => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", onMouseMove);
  //   return () => {
  //     console.log("unmount");
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("mount1");
  // }, []);

  // useEffect(() => {
  //   console.log("mount2");
  // }, []);
  // https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json
  // http://numbersapi.com/43

  // const [count, setCount] = useState(() =>
  //   JSON.parse(localStorage.getItem("count"))
  // );
  // const { data, loading } = useFetch(`http://numbersapi.com/${count}`);

  // useEffect(() => {
  //   localStorage.setItem("count", JSON.stringify(count));
  // }, [count]);

  const inputRef = useRef();
  const helloRef = useRef(() => console.log("hello"));

  // useLayoutEffect(() => {
  //   console.log("useLayoutEffect", inputRef.current.getBoundingClientRect());
  // }, []);

  const [rect, inputRef2] = useMeasure([]);
  console.log("rect", JSON.stringify(rect));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <div>rect: {rect}</div> */}
        {/* <p>Count1: {count1}</p>
        <p>Count2: {count2}</p>
        <button
          className="App-link"
          onClick={() =>
            setCount(currentCount => ({ ...currentCount, count1: count1 + 1 }))
          }
          // target="_blank"
          // rel="noopener noreferrer"
        >
          +1 count 1
        </button>
        <button
          className="App-link"
          onClick={() =>
            setCount(currentCount => ({ ...currentCount, count2: count2 + 1 }))
          }
          // target="_blank"
          // rel="noopener noreferrer"
        >
          +1 count 2
        </button> */}

        <button onClick={() => setShowHello(!showHello)}>toggle hello</button>
        {showHello && <Hello />}
        <input
          type="email"
          name="email"
          ref={inputRef}
          value={values.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          ref={inputRef2}
          onChange={handleChange}
          value={values.password}
        />
        <button
          onClick={() => {
            // console.log(inputRef.current.getBoundingClientRect());
            inputRef.current.focus();
            helloRef.current();
          }}
        >
          focus
        </button>
      </header>
    </div>
  );
};

export default App;
