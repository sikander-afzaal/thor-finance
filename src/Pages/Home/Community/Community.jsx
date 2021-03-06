import React from "react";
import "./Community.css";
import circle from "../../../Assets/circle.svg";
import twitter from "../../../Assets/twitter.svg";
import discord from "../../../Assets/discord.svg";
function Community() {
  return (
    <div id="community" className={"community"}>
      <h1 className="heading">Join the Community</h1>
      <div className="bottom-comm">
        <div className="left-comm">
          <div className="box-com">
            <a target={"blank"} href="https://twitter.com/_ThorFinancial">
              <img src={twitter} alt="" />
            </a>
            <h2 className="kanit">54.9K</h2>
            <p className="kanit">FOLLOWERS</p>
          </div>
          <div className="box-com">
            <a target={"blank"} href="https://discord.com/invite/thornodes">
              <img src={discord} alt="" />
            </a>
            <h2 className="kanit">47,109</h2>
            <p className="kanit">ASGARDIANS</p>
          </div>
        </div>
        <hr />
        <div className="right-comm">
          <div className="head-right">
            <h2 className="kanit">NEWS {"&"} UPDATES</h2>
            <a target={"blank"} href="https://thornodes.medium.com/">
              <img src={circle} alt="" />
            </a>
          </div>
          <div className="row-right-comm">
            <h3 className="kanit">Gods of Asgard — Development Update</h3>
            <p className="kanit"> May 20, 2022</p>
          </div>
          <div className="row-right-comm">
            <h3 className="kanit">Gods of Asgard — Development Update</h3>
            <p className="kanit"> May 20, 2022</p>
          </div>
          <div className="row-right-comm">
            <h3 className="kanit">Gods of Asgard — Development Update</h3>
            <p className="kanit"> May 20, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
