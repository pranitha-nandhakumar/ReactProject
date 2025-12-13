import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/functionalComponents/Navbar.jsx";
import "./App.css";
import Home from "./components/functionalComponents/Home.jsx";
import About from "./components/functionalComponents/About.jsx";
import LearningReact from "./components/functionalComponents/LearningReact.jsx";
import Contact from "./components/functionalComponents/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learning" element={<LearningReact />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
