import React from "react";
import "./Models.css";

const Models = () => {
  const models = [
    {
      name: "LAND CRUISER 1958",
      desc: "Heritage-inspired base model with hybrid powertrain. Full-time 4WD.",
      image: "./land-cruiser-1958.jpg",
    },
    {
      name: "LAND CRUISER",
      desc: "Premium trim with advanced off-road tech. 326 HP hybrid power.",
      image: "./Land-cruiser-Hybrid.jpg",
    },
    {
      name: "LAND CRUISER DESERT",
      desc: "Sand-specialized suspension. Extreme dune capability.",
      image: "./Land-cruiser-Desert.jpg",
    },
  ];

  return (
    <section className="models-section" id="models">
      <div className="models-container">
        <div className="section-header">
          <h2>OUR MODELS</h2>
          <p>Choose your desert conqueror</p>
        </div>
        <div className="models-grid">
          {models.map((model, index) => (
            <div key={index} className="model-card">
              <div className="model-image">
                <img src={model.image} alt={model.name} />
              </div>
              <div className="model-info">
                <h3>{model.name}</h3>
                <p>{model.desc}</p>
                <button className="model-btn">CONFIGURE</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;
