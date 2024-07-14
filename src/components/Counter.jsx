import { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0); // initialize the counter value to 0
  const [color, setColor] = useState('royalblue');

  const add = () => {
    setCounter(counter + 1);
  };

  const subtraction = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  const changeColor = () => {
    setColor(color === 'royalblue' ? 'purple' : 'royalblue');
  }; // change the color of the header

  useEffect(() => {
    document.title = `Count:  ${counter}${color}`;
  }, [counter,color]); // change this to [color] to update text when color changes

  return (
    <div className="counter">
      <h1 className="counterHeader" style={{ color: color }}>Counter: {counter}</h1>
      <br />
      <button className="add" onClick={add}>
        +1
      </button>
      <button className="subtraction" onClick={subtraction}>
        -1
      </button>
      <button className="changeColor" onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Counter;
