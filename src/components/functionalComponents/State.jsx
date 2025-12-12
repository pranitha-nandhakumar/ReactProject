import { useState } from "react";

const State = () => {
  const [state, updatedState] = useState("State");
  function setState() {
    updatedState("Updated State");
  }
  return (
    <div>
      <h1>This is {state} Component</h1>
      <button onClick={setState}>Change State</button>
    </div>
  );
};

export default State;
