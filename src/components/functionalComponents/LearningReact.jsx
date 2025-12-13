import Props from "./Props.jsx";
import UseState from "./Hooks/UseState.jsx";
import UseEffectExample from "./Hooks/UseEffect.jsx";
import UseEffectAPI from "./Hooks/UseEffectAPI.jsx";
import UseRef from "./Hooks/UseRef.jsx";
import UseMemo from "./Hooks/UseMemo.jsx";



const LearningReact = () => {
  return (
    <div>
      <h1>📘 Learning React</h1>
      <p>
        This page contains information about learning React basics like 
        components, state, props, events, routing, etc.
      </p>

      <h2>🔹 Props Example</h2>
      <Props hi="Welcome to Props" grade="12th" age="17" img="/vite.svg" />

      <h2>🔹 useState Example</h2>
      <UseState />
      <h2>🔹 UseEffect Example</h2>
      <UseEffectExample />
      <h2>🔹 UseEffect API Example</h2>
      <UseEffectAPI />
      <h2>🔹 UseRef Example</h2>
      <UseRef />
      <h2>🔹 UseMemo Example</h2>
      <UseMemo />

    </div>
  );
};

export default LearningReact;
