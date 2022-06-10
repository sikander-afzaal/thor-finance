import React from "react";
import union from "../../Assets/icons/small-un.svg";
import "./SliderBox.css";
import redactImg from "../../Assets/icons/redact.svg";
function SliderBox({ title, img, desc, redact }) {
  return (
    <div className="slide-box ">
      <div className="slide-box-inner">
        <img src={img} className={"icon"} alt="" />
        {redact && <img src={redactImg} alt="" className="redact" />}
        <img src={union} alt="" className="union" />
        <p className="kanit box-head">{title}</p>
        <p className="kanit box-desc">{desc}</p>
      </div>
    </div>
  );
}

export default SliderBox;
