import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("home"); 
      if (!hero) return;

      const heroBottom = hero.offsetTop + hero.offsetHeight; 
      setSticky(window.scrollY >= heroBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${sticky ? "sticky" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <h2>TOYOTA</h2>
        </div>

        <div className="nav-center-logo">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-toyota-logo-icon-svg-download-png-827471.png?f=webp&w=256"
            alt="Toyota"
            className="toyota-logo"
          />
        </div>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#models" className="nav-link">
              Models
            </a>
          </li>
          <li>
            <a href="#features" className="nav-link">
              Features
            </a>
          </li>
          <li>
            <a href="#footer" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
