import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <i className="fa-solid fa-bars menu-icon" onClick={toggleSidebar}></i>
          <i className="fa-solid fa-code code-icon "></i>
          <Link to="/"><h1>Portfolio</h1></Link>
          
        </div>

        <nav className="nav">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/skills">SKILLS</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>
          </ul>
        </nav>
      </header>

      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <button className="close-btn" onClick={toggleSidebar}>
            x
          </button>
          <h1>Portfolio</h1>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/skills">SKILLS</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="mini-sidebar">
        <a
          href="mailto:shabareenath9876@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-regular fa-envelope"></i>
        </a>
        <a
          href="https://linkedin.com/in/shabareenathuj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/shabareenath"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://instagram.com/_s.h.a.b.a.r.i_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </>
  );
};

export default Header;
