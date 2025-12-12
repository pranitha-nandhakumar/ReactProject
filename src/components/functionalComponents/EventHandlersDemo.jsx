import { useState } from "react";

const EventHandlersDemo = () => {
  const [text, setText] = useState("");
  const [hover, setHover] = useState(false);
  const [double, setDouble] = useState("");
  const [keyPressed, setKeyPressed] = useState("");
  const [focus, setFocus] = useState(false);
  const [rightClick, setRightClick] = useState("");
  const [scroll, setScroll] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form Submitted!");
  }

  return (
    <div style={{ padding: "20px", border: "2px solid black" }}>
      <h1>React Event Handlers Demo</h1>

      {/* CLICK */}
      <button onClick={() => alert("Button Clicked!")}>Click Me</button>

      <hr />

      {/* CHANGE */}
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <p>Typed: {text}</p>

      <hr />

      {/* MOUSE ENTER / LEAVE */}
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: "200px",
          height: "60px",
          backgroundColor: hover ? "lightgreen" : "lightgray",
          textAlign: "center",
          lineHeight: "60px",
          marginBottom: "20px",
        }}
      >
        Hover Here
      </div>

      <hr />

      {/* DOUBLE CLICK */}
      <button onDoubleClick={() => setDouble("Double Clicked!")}>
        Double Click Me
      </button>
      <p>{double}</p>

      <hr />

      {/* KEY DOWN */}
      <input
        type="text"
        placeholder="Press any key"
        onKeyDown={(e) => setKeyPressed(e.key)}
      />
      <p>Key Pressed: {keyPressed}</p>

      <hr />

      {/* FOCUS / BLUR */}
      <input
        type="text"
        placeholder="Focus here"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <p>{focus ? "Input Focused" : "Input Not Focused"}</p>

      <hr />

      {/* RIGHT CLICK */}
      <p
        onContextMenu={(e) => {
          e.preventDefault();
          setRightClick("Right Click Detected!");
        }}
        style={{
          backgroundColor: "#ddd",
          padding: "10px",
          width: "200px",
        }}
      >
        Right Click Here
      </p>
      <p>{rightClick}</p>

      <hr />

      {/* WHEEL SCROLL */}
      <div
        onWheel={(e) => setScroll(scroll + 1)}
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "lightblue",
          overflow: "auto",
        }}
      >
        Scroll inside me!
      </div>
      <p>Scrolled: {scroll} times</p>

      <hr />

      {/* FORM SUBMIT */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter message" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EventHandlersDemo;

