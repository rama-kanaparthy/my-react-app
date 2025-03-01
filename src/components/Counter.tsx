import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Counter</h2>
      <p data-testid="count">Count: {count}</p>
      <button onClick={() => setCount(count + 1)} data-testid="increment-btn">
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} data-testid="decrement-btn">
        Decrement
      </button>
      <button onClick={() => setCount(0)} data-testid="reset-btn">
        Reset
      </button>
    </div>
  );
};

export default Counter;
