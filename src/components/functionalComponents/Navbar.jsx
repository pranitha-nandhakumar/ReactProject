import { Link } from "react-router-dom";
import Props from "./Props.jsx";
import State from "./State.jsx"; 
import "../../App.css";  

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/learning">Learning React</Link></li>
          <li><Link to="/components">Components</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* EXTRA COMPONENTS – DON’T PUT IN NAVBAR */}
      <Props hi="Welcome to Props" grade="12th" age="17" img="/vite.svg" />
      <State />
    </>
  );
}

export default Navbar;

