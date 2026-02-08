import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Video from "./components/Video/Video";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Models from "./components/Models/Models";
import Interior from "./components/Interior/Interior";

function App() {
  return (
    <div className="app">
      <Hero />
      <Navbar />
      <Features />
      <Video />
      <Interior />
      <Models />
      <Footer />
    </div>
  );
}

export default App;
