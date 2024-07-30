import React, { useState } from 'react';

const UseState = () => {
  console.log('update');

  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <span>숫자:{count}</span>

      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default UseState;
