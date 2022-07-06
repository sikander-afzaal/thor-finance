import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "./Roadmap.css";
import tick from "../../../Assets/tick.svg";
import Q1 from "../../../Assets/Q1 (Stroke).svg";
import Q2 from "../../../Assets/Q2 (Stroke).svg";
import Q3 from "../../../Assets/Q3 (Stroke).svg";
import Q4 from "../../../Assets/Q4 (Stroke).svg";
import bg from "../../../Assets/roadmap-bg.mp4";
function Roadmap() {
  return (
    <div className="roadmap-cont">
      <video
        className="road-bg"
        src={bg}
        loop
        muted
        autoPlay
        controls={false}
      />
      <div id="road" className="roadmap">
        <Splide
          options={{
            rewind: true,
            pagination: true,
            arrows: false,
            perPage: 1,
            perMove: 1,
            direction: "ttb",
            width: "100%",
            height: "600px",
            breakpoints: {
              722: {
                direction: "ltr",
              },
            },
          }}
          aria-label="React Splide Example"
        >
          <SplideSlide>
            <div className="road-box">
              <img src={Q1} alt="" className="stroke" />
              <div className="road-list">
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">
                    V2 Contract Deployment + Maintenance Fee
                  </p>
                </div>
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">Gods of Asgard P2E Development</p>
                </div>
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">Development of new UI</p>
                </div>
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">Reorg of THOR + Growth</p>
                </div>
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">Dedicated 24/7 Support Team</p>
                </div>
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">Staking (SSS & THOR-AVAX Pool) </p>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="road-box">
              <img src={Q2} alt="" className="stroke" />
              <div className="road-list">
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">
                    V2 Contract Deployment + Maintenance Fee
                  </p>
                </div>
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">Gods of Asgard P2E Development</p>
                </div>
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">Development of new UI</p>
                </div>
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">Reorg of THOR + Growth</p>
                </div>
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">Dedicated 24/7 Support Team</p>
                </div>
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">Staking (SSS & THOR-AVAX Pool) </p>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="road-box">
              <img src={Q3} alt="" className="stroke" />
              <div className="road-list">
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">
                    V2 Contract Deployment + Maintenance Fee
                  </p>
                </div>
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">Gods of Asgard P2E Development</p>
                </div>
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">Development of new UI</p>
                </div>
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">Reorg of THOR + Growth</p>
                </div>
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">Dedicated 24/7 Support Team</p>
                </div>
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">Staking (SSS & THOR-AVAX Pool) </p>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="road-box">
              <img src={Q4} alt="" className="stroke" />
              <div className="road-list">
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">
                    V2 Contract Deployment + Maintenance Fee
                  </p>
                </div>
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">Gods of Asgard P2E Development</p>
                </div>
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">Development of new UI</p>
                </div>
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">Reorg of THOR + Growth</p>
                </div>
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">Dedicated 24/7 Support Team</p>
                </div>
                <div className="list-item">
                  <img src={tick} alt="" />
                  <p className="kanit">Staking (SSS & THOR-AVAX Pool) </p>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default Roadmap;
