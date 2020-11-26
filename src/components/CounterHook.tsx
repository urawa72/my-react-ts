import React, { useState } from 'react';

const CounterHook = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={incrementCount}>count + 1</button>
    </>
  )
};

export default CounterHook;
