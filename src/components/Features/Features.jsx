import React from "react";
import "./Features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMountainSun,
  faTemperatureHigh,
  faRoute,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
const Features = () => {
  const features = [
    {
      icon: faMountainSun,
      color: "#f4c430",
      title: "Desert Proven",
      desc: "Tested in the harshest sand dunes",
    },
    {
      icon: faTemperatureHigh,
      color: "#ff6b35",
      title: "Sand Storm Ready",
      desc: "Extreme heat and dust protection",
    },
    {
      icon: faRoute,
      color: "#3fb950",
      title: "Off-Road King",
      desc: "Unmatched ground clearance and 4x4",
    },
    {
      icon: faGear,
      color: "#c0c0c0",
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
              <span className="feature-icon">
                <FontAwesomeIcon
                  icon={feature.icon}
                  size="2x"
                  style={{ color: feature.color }}
                />
              </span>
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
