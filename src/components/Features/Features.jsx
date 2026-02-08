import React from "react";
import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: "🏜️",
      title: "Desert Proven",
      desc: "Tested in the harshest sand dunes",
    },
    {
      icon: "🔥",
      title: "Sand Storm Ready",
      desc: "Extreme heat and dust protection",
    },
    {
      icon: "🛤️",
      title: "Off-Road King",
      desc: "Unmatched ground clearance and 4x4",
    },
    {
      icon: "⚙️",
      title: "Dune Suspension",
      desc: "Engineered for sand dune domination",
    },
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="section-header">
          <h2>Why Choose Land Cruiser?</h2>
          <p>Built for the desert. Born for adventure.</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
