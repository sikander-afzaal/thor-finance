import React from "react";
import "./Hero.css";
import vid from "../../../Assets/hero.mp4";
function Hero() {
  return (
    <div id="home" className="hero">
      <div className="top-overlay"></div>
      <video src={vid} muted autoPlay controls={false} loop />
      <div className="bottom-overlay"></div>
    </div>
  );
}

export default Hero;
