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
        <a href="#home" className="foot-link kanit">
          Home
        </a>
        <a href="#over" className="foot-link kanit">
          Overview
        </a>
        <a href="#eco" className="foot-link kanit">
          Ecosystem
        </a>
        <a href="#nft" className="foot-link kanit">
          Thor NFTs
        </a>
        <a href="#team" className="foot-link kanit">
          Thor Team
        </a>
        <a href="#community" className="foot-link kanit">
          Community
        </a>
      </div>
      <div className="foot-social">
        <a target={"blank"} href="https://discord.com/invite/thornodes">
          <img src={discord} alt="" />
        </a>
        <a target={"blank"} href="https://twitter.com/_ThorFinancial">
          <img src={twitter} alt="" />
        </a>
        <a target={"blank"} href="https://thornodes.medium.com/">
          <img src={circle} alt="" />
        </a>
      </div>
      <p className="copy-right">©2022 Thor Financial. All rights reserved.</p>
    </div>
  );
}

export default Footer;
