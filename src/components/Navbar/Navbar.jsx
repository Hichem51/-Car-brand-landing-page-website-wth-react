import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo Left */}
        <div className="nav-logo">
          <h2>TOYOTA</h2>
        </div>

        {/* CENTER TOYOTA LOGO */}
        <div className="nav-center-logo">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-toyota-logo-icon-svg-download-png-827471.png?f=webp&w=256"
            alt="Toyota"
            className="toyota-logo"
          />
        </div>

        {/* Menu Right */}
        <ul className="nav-menu">
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
            <a href="#Footer" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
