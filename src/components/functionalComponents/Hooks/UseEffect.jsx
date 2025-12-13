import { useState, useEffect } from "react";

const UseEffectExample = () => {
  const [text, updateText] = useState("hello");

  // Optional: Example useEffect to log whenever text changes
  useEffect(() => {
    console.log("Text changed:", text);
  }, [text]);

  return (
    <div style={{ margin: "20px" }}>
      <h1>UseEffect Hook Example</h1>

      {/* Text box */}
      <input
        type="text"
        value={text} // bind to state
        onChange={(e) => updateText(e.target.value)} // update state on typing
        placeholder="Type something..."
        style={{ padding: "5px", width: "300px" }}
      />

      <p>You typed: {text}</p>
    </div>
  );
};

export default UseEffectExample;
