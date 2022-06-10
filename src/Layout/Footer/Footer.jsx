import React from "react";
import "./Footer.css";
import union from "../../Assets/Union.svg";
import discord from "../../Assets/discord.svg";
import twitter from "../../Assets/twitter.svg";
import circle from "../../Assets/circle.svg";
function Footer() {
  return (
    <div className="footer">
      <img src={union} className="union" alt="" />
      <div className="foot-links">
        <a href="#" className="foot-link kanit">
          Home
        </a>
        <a href="#" className="foot-link kanit">
          Overview
        </a>
        <a href="#" className="foot-link kanit">
          Ecosystem
        </a>
        <a href="#" className="foot-link kanit">
          Thor NFTs
        </a>
        <a href="#" className="foot-link kanit">
          Thor Team
        </a>
        <a href="#" className="foot-link kanit">
          Community
        </a>
      </div>
      <div className="foot-social">
        <a href="#">
          <img src={discord} alt="" />
        </a>
        <a href="#">
          <img src={twitter} alt="" />
        </a>
        <a href="#">
          <img src={circle} alt="" />
        </a>
      </div>
      <p className="copy-right">©2022 Thor Financial. All rights reserved.</p>
    </div>
  );
}

export default Footer;
