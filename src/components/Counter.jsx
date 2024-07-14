import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0); //we initlize the counter value to 0
  const add=()=>{setCounter(counter+1)}
  const subtraction=()=>{
    if(counter>0)
    setCounter(counter-1)
  }
  return (
    <div className="counter">
      <h1 className="counterHeader">Counter:{counter}</h1>
      <button className="add" onClick={add}>+1</button>
      <button className="subtraction" onClick={subtraction}>-1</button>
    </div>
  );
};
export default Counter;
