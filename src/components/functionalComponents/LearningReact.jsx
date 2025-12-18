import { Outlet } from "react-router-dom";

const LearningReact = () => {
  return (
    <div style={{ margin: "20px", fontFamily: "Poppins, sans-serif" }}>
      
      {/* Main Header */}
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Learning React Hooks
      </h1>

      {/* Optional Description */}
      <p style={{ textAlign: "center", marginBottom: "20px", fontSize: "18px" }}>
        Click on any hook from the navbar dropdown to see examples in action.
      </p>

      {/* Render Child Routes Here */}
      <Outlet />

    </div>
  );
};

export default LearningReact;
