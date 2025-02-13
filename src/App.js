import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "ICREMENT" });
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
    </div>
  );
}

export default App;
