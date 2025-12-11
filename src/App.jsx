import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/functionalComponents/Navbar.jsx";
import "./App.css";
import ClassComponent from "./components/ClassComponents/ClassComponent.jsx";
import EventHandlersDemo from "./components/functionalComponents/EventHandlersDemo.jsx";
import Home from "./components/functionalComponents/Home.jsx";
import About from "./components/functionalComponents/About.jsx";
import Learning from "./components/functionalComponents/LearningReact.jsx";
import Contact from "./components/functionalComponents/Contact.jsx";


function App() {
  const h1Style = {
    backgroundColor: "red",
    color: "blue",
    textAlign: "center",
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <div>
        <h1 style={h1Style}>Welcome to JSX</h1>
        <h2 className="h2">This is simple react component</h2>

        <img
          src="vite.svg"
          alt=""
          style={{ marginLeft: "100px", width: "500px" }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
