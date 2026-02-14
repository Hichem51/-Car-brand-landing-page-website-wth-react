import React, { useEffect, useState, useRef } from "react";
import "./Video.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";

const Video = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Default muted
  const videoRef = useRef(null);

  const desertTexts = ["DESERT KING", "SAND MASTER"];

  // Toggle mute/unmute
  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const timeout1 = setTimeout(() => setIsVisible(true), 500);
    const timeout2 = setTimeout(() => setTextIndex(1), 4000);
    const timeout3 = setTimeout(() => {
      setIsVisible(false);
      const restart = setTimeout(() => setTextIndex(0), 1500);
      return () => clearTimeout(restart);
    }, 7000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [textIndex]);

  return (
    <section className="video-section" id="video-section">
      <video
        ref={videoRef}
        className="video-background"
        autoPlay
        muted
        loop
        playsInline
        src="/sequence-ng-land-cruiser.mp4"
      />

      {/* TOP RIGHT MUTE BUTTON */}
      <button
        className={`mute-button ${isMuted ? "muted" : ""}`}
        onClick={toggleMute}
      >
        {isMuted ? (
          <FontAwesomeIcon icon={faVolumeXmark} />
        ) : (
          <FontAwesomeIcon icon={faVolumeHigh} />
        )}
      </button>

      <div className="video-content">
        <h2 className="main-title">THE FUTURE OF DRIVING</h2>
        <p className={`desert-subtitle ${isVisible ? "show" : "hide"}`}>
          {desertTexts[textIndex]}
        </p>
        <button className="cta-button">DISCOVER LAND CRUISER</button>
      </div>
    </section>
  );
};

export default Video;
