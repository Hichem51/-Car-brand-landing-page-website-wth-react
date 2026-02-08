import React from "react";
import "./Hero.css";

const Hero = () => {
  const scrollToVideo = () => {
    document.getElementById("video-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            DESERT <span className="gradient-text">KING</span>
            <br />
            CONQUEROR
          </h1>
          <p className="hero-subtitle">
            Built for the harshest terrains. Engineered for the endless desert.
          </p>
          <div className="hero-buttons">
            <button className="cta-button secondary" onClick={scrollToVideo}>
              WATCH VIDEO
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="car-showroom"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
