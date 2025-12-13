import { useState, useMemo } from "react";

const slowFunction = (num) => {
  console.log("calling Slow Function");
  for (let i = 0; i <= 1000000000; i++) {}  // heavy loop
  return num * 2;
};

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(true);

  const styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
    padding: "20px",
  };

  // ✅ useMemo used correctly
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <div style={styling}>
      <h2>This is UseMemo Example</h2>
      
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <button onClick={() => setNumber(number + 1)}>+</button>

      <h3>Number is {doubleNumber}</h3>

      <button onClick={() => setTheme(!theme)}>Toggle theme</button>
    </div>
  );
};

export default UseMemo;
