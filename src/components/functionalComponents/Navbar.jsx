import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLogin, setLogin] = useState(true);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLogin(false);
    navigate("/login");
  };

  const handleLogout = () => {
    setLogin(true);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        <li
          className="dropdown"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          Learning React
          {open && (
            <ul className="dropdown-menu">
              <li><Link to="/learning/usestate">useState</Link></li>
<li><Link to="/learning/useeffect">useEffect</Link></li>
<li><Link to="/learning/useeffect-api">useEffect API</Link></li>
<li><Link to="/learning/useref">useRef</Link></li>
<li><Link to="/learning/usememo">useMemo</Link></li>
<li><Link to="/learning/usecallback">useCallback</Link></li>

            </ul>
          )}
        </li>

        <li><Link to="/contact">Contact</Link></li>

        <li>
          {isLogin ? (
            <span onClick={handleLogin}>Login</span>
          ) : (
            <span onClick={handleLogout}>Logout</span>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
