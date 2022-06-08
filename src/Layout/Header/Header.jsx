import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import logo from "../../Assets/logo.png";
function Header() {
  const [header, sethHeader] = useState(false);
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div className={`nav-link-div ${header ? "open-header" : ""}`}>
        <a href="#" className="nav-link kanit">
          Overview
        </a>
        <a href="#" className="nav-link kanit">
          EcoSystem
        </a>
        <a href="#" className="nav-link kanit">
          Roadmap
        </a>
        <a href="#" className="nav-link kanit">
          Team
        </a>
        <button className="purple-btn kanit">Launch App</button>
      </div>
      <FontAwesomeIcon
        onClick={() => sethHeader((prev) => !prev)}
        icon={header ? faXmark : faBars}
        className={`mobile ${header ? "black-icon" : ""}`}
      />
    </div>
  );
}

export default Header;
