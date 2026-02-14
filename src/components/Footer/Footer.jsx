import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="desert-bg"></div>

      <div className="footer-container">
        <div className="footer-brand">
          <div className="logo">
            <h2>TOYOTA</h2>
            <span className="desert-icon">🏜️</span>
          </div>
          <p className="tagline">Conquer Any Terrain</p>
        </div>

        <div className="footer-links">
          <div className="link-column">
            <h4>Models</h4>
            <a href="">Desert King</a>
            <a href="">Sandstorm</a>
            <a href="">Dune Runner</a>
          </div>
          <div className="link-column">
            <h4>Technology</h4>
            <a href="">4x4 Systems</a>
            <a href="">Off-Road Tech</a>
            <a href="">Suspension</a>
          </div>
          <div className="link-column">
            <h4>Support</h4>
            <a href="">Warranty</a>
            <a href="">Service</a>
            <a href="">Manuals</a>
          </div>
        </div>

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
            <a
              href="https://www.instagram.com/toyota?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="social-btn instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://www.youtube.com/user/TOYOTAglobal"
              className="social-btn youtube"
            >
              <i className="fab fa-youtube"></i>
            </a>

            <a href="https://x.com/ToyotaSoCal" className="social-btn twitter">
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 TOYOTA Motors. Built for the Wild.</p>
      </div>
    </footer>
  );
};

export default Footer;
