import React, { useState } from "react";
import "../styles/counter.css";


const counter = (props) => {
  const [count, setcount] = useState(0);
  return (
    <div className="counter-cont">
      <p id="para">you have clicked {props.name} {count} times</p>
      <button
        id="btn"
        onClick={() => {
          setcount(count + 1);
        }}
        onDoubleClick={() => {
          setcount(count * 10);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default counter;

