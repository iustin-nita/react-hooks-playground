import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useForm } from "./useForm";

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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password}
        />
      </header>
    </div>
  );
};

export default App;
