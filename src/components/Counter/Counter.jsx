import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("yellow");

  const incrementFunction = () => {
    setCount(count + 1);
  };
  const decrementtFunction = () => {
    setCount(count - 1);
  };
  const colors = ["green", "red", "indigo", "orange", "aqua", "blue", "yellow"];
  const randomNumber = Math.floor(Math.random() * 6);

  const changeColor = () => {
    setColor(colors[randomNumber]);
  };

  return (
    <div className="counter">
      <p style={{ backgroundColor: `${color}` }}>
        {count} {color}
      </p>
      <button onClick={() => decrementtFunction()}>-</button>
      <button onClick={() => changeColor()}>Change Color</button>
      <button onClick={() => incrementFunction()}>+</button>
    </div>
  );
};

export default Counter;
