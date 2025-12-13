import { useRef, useState, useEffect } from "react";

const UseRefExample = () => {
  const [text, setText] = useState("");
  const prevText = useRef("No Previous Render");

  // update previous value on every render
  useEffect(() => {
    prevText.current = text;
  }, [text]);

  return (
    <div>
      <h2>This is UseRef Hook Component</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h2>The current render is: {text}</h2>
      <h3>The previous render was: {prevText.current}</h3>
    </div>
  );
};

export default UseRefExample;
