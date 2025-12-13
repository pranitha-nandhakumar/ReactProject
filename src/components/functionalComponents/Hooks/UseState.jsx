import { useState } from "react";

const UseState = () => {
  
  const [number, updateNumber] = useState(0);

  
  const [text, setText] = useState("");

  
  const subTract = () => updateNumber(number - 1);
  const addTion = () => updateNumber(number + 1);
  const reSet = () => updateNumber(0);

  
  const handleTextChange = (e) => setText(e.target.value);

  return (
    <div style={{ margin: "20px" }}>
      <h2>UseState Hook Example</h2>

      {/* Counter */}
      <div>
        <button onClick={subTract}>-</button>
        <input type="text" value={number} readOnly />
        <button onClick={addTion}>+</button>
        <button onDoubleClick={reSet}>Reset</button>
      </div>

      {/* Text box */}
      <div style={{ marginTop: "20px" }}>
        <h3>Type something:</h3>
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text here"
          style={{ padding: "5px", width: "300px" }}
        />
        <p>You typed: {text}</p>
      </div>
    </div>
  );
};

export default UseState;
