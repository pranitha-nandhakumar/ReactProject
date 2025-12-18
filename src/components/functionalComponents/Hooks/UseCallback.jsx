import { useState, useCallback } from "react";

const UseCallback = () => {
  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useState(false);

  const styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
    padding: "20px",
  };

  // + callback
  const increment = useCallback(() => {
    setNumber(prev => prev + 1);
  }, []);

  // - callback
  const decrement = useCallback(() => {
    setNumber(prev => prev - 1);
  }, []);

  // multiples callback
  const getMultiples = useCallback(() => {
    if (number <= 0) return [];

    return [
      number * 1,
      number * 2,
      number * 3,
      number * 4,
      number * 5,
    ];
  }, [number]);

  return (
    <div style={styling}>
      <h2>useCallback – Multiples Example</h2>

      <button onClick={() => setTheme(!theme)}>
        Toggle Theme
      </button>

      <br /><br />

      <button onClick={decrement}>-</button>

      <input
        type="number"
        value={number}
        readOnly
        style={{ margin: "0 10px" }}
      />

      <button onClick={increment}>+</button>

      <ul>
        {getMultiples().map((val, index) => (
          <li key={index}>
            {number} × {index + 1} = {val}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseCallback;
