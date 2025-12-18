import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/functionalComponents/Navbar.jsx";
import "./App.css";

import Home from "./components/functionalComponents/Home.jsx";
import About from "./components/functionalComponents/About.jsx";
import LearningReact from "./components/functionalComponents/LearningReact.jsx";
import Contact from "./components/functionalComponents/Contact.jsx";

// Hooks Pages
import UseState from "./components/functionalComponents/Hooks/UseState.jsx";
import UseEffectExample from "./components/functionalComponents/Hooks/UseEffect.jsx";
import UseRef from "./components/functionalComponents/Hooks/UseRef.jsx";
import UseMemo from "./components/functionalComponents/Hooks/UseMemo.jsx";
import UseCallback from "./components/functionalComponents/Hooks/UseCallback.jsx";

// Auth Pages
import Login from "./components/Auth/Login.jsx";
import Signup from "./components/Auth/Signup.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Nested routes */}
        <Route path="/learning" element={<LearningReact />}>
          <Route path="usestate" element={<UseState />} />
          <Route path="useeffect" element={<UseEffectExample />} />
          <Route path="useref" element={<UseRef />} />
          <Route path="usememo" element={<UseMemo />} />
          <Route path="usecallback" element={<UseCallback />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
