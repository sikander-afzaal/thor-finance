import React from "react";
import "./TeamBox.css";
function TeamBox({ img, name, title, bio }) {
  return (
    <div className="team-box">
      <img src={img} alt="" />
      <div className="bottom-team-box">
        <h2 className="kanit">{name}</h2>
        <p className="kanit">{title}</p>
      </div>
      {bio && (
        <div className="overlay-team">
          <p className="kanit">{bio}</p>
          <hr />
          <div className="person-desc">
            <h2 className="kanit">{name}</h2>
            <p className="kanit">{title}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamBox;
