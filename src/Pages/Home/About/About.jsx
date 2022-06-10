import React from "react";
import "./About.css";
import vid from "../../../Assets/hammer.mp4";
function About() {
  return (
    <div id="over" className="about">
      <div className="left-about">
        <h1 className="trajan">
          Next Generation Hybrid Protocol on the Avalanche Ecosystem
        </h1>
        <p className="noto">
          Thor is a NaaS + DaaS protocol that invests it’s treasury to
          distribute yield back to our node operators.
        </p>
        <div className="purple-btn kanit">Learn More</div>
      </div>
      <div className="right-about">
        <video src={vid} autoPlay loop muted controls={false} />
      </div>
    </div>
  );
}
export default About;
