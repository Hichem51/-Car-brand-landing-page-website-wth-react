import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="Footer">
      {/* Desert sand background */}
      <div className="desert-bg"></div>

      <div className="footer-container">
        {/* Logo & Tagline */}
        <div className="footer-brand">
          <div className="logo">
            <h2>TOYOTA</h2>
            <span className="desert-icon">🏜️</span>
          </div>
          <p className="tagline">Conquer Any Terrain</p>
        </div>

        {/* Navigation Columns */}
        <div className="footer-links">
          <div className="link-column">
            <h4>Models</h4>
            <a href="#">Desert King</a>
            <a href="#">Sandstorm</a>
            <a href="#">Dune Runner</a>
          </div>
          <div className="link-column">
            <h4>Technology</h4>
            <a href="#">4x4 Systems</a>
            <a href="#">Off-Road Tech</a>
            <a href="#">Suspension</a>
          </div>
          <div className="link-column">
            <h4>Support</h4>
            <a href="#">Warranty</a>
            <a href="#">Service</a>
            <a href="#">Manuals</a>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <div className="contact-item">
            <span>📍</span>
            <span>Desert Proving Grounds, NV</span>
          </div>
          <div className="contact-item">
            <span>📞</span>
            <span>+1 (702) OFF-ROAD</span>
          </div>
          <div className="social-row">
            <a href="#" className="social-btn instagram">
              📸
            </a>
            <a href="#" className="social-btn youtube">
              ▶
            </a>
            <a href="#" className="social-btn twitter">
              ✈
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© 2026 TOYOTA Motors. Built for the Wild.</p>
      </div>
    </footer>
  );
};

export default Footer;
