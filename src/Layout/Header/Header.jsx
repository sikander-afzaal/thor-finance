import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import logo from "../../Assets/logo.png";
function Header() {
  const [header, setHeader] = useState(false);
  const [black, setBlack] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBlack(true);
      } else {
        setBlack(false);
      }
    });
  }, []);

  return (
    <div className={`header ${black ? "black-header" : ""}`}>
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
        onClick={() => setHeader((prev) => !prev)}
        icon={header ? faXmark : faBars}
        className={`mobile ${header ? "black-icon" : ""}`}
      />
    </div>
  );
}

export default Header;
