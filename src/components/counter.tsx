import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div
      style={{ border: '1px solid red' }}
      onClick={() => setCounter((v) => v + 1)}
    >
      {counter}
    </div>
  );
};

export default Counter;
