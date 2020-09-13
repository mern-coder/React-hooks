import React, { useState } from "react";

const One = () => {
  /*variable
   */
  // const name="jack";
  /*function
   */
  // const setName=()=>{
  //     name="jack"
  // }

  const [name, setName] = useState("Tim");
  const changeName = () => {
    setName("Raj");
  };
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const IncrementCount = () => {
    setCount(count + 1);
  };
  const DecrementCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={changeName}>Change Name!</button>
      <h3>{count}</h3>
      <button onClick={IncrementCount}>Increment</button>
      <button onClick={DecrementCount}>Decrement</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
    </div>
  );
};

export default One;
