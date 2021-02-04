import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="../videos/video-2.mp4" autoPlay={true} loop muted /> */}
      <img src="./images/img-home.jpg" alt="" />
      <h1>KUY JALAN</h1>
      <p>Jalan KUY</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Look at this <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
