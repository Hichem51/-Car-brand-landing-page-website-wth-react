import React from "react";
import "./Interior.css";

const Interior = () => {
  return (
    <section className="interior-section">
      <div className="interior-container">
        <div className="interior-image">
          <img
            src="Interior.jpg"
            alt="Land Cruiser Interior"
          />
        </div>
        <div className="interior-content">
          <div className="interior-text">
            <h2>
              Control <span className="highlight">Command</span>
            </h2>
            <p>
              Where you see the road less travelled, you're already there. TOYOTA
              Land Cruiser is built to go where few others can.
            </p>
            <button className="interior-btn">DISCOVER MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interior;
