import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const scrollToVideo = () => {
    document.getElementById("video-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const backgrounds = [
    "/Land-cruiser-Desert.jpg",
    "/Land-cruiser-Hybrid.jpg",
    "/land-cruiser-1958.jpg",
    "./photo4.jpg",
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <section className="hero" id="home">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`hero-bg ${index === currentBg ? "active" : ""}`}
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
      ))}

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
