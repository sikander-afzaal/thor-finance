import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

import "./Price.css";
function Price() {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <div className="price-container">
      <div className="price-shadow-left"></div>
      <div className="price-shadow-right"></div>
      <div className="price">
        <div className="price-box">
          <h2 className="noto">Market Price</h2>
          <div>
            <sup>$</sup>
            <CountUp
              end={174.1}
              duration={5}
              suffix="M+"
              start={viewPortEntered ? null : 0}
            >
              {({ countUpRef }) => {
                return (
                  <VisibilitySensor
                    active={!viewPortEntered}
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setViewPortEntered(true);
                      }
                    }}
                    delayedCall
                  >
                    <p className={"kanit"} ref={countUpRef}></p>
                  </VisibilitySensor>
                );
              }}
            </CountUp>
          </div>
        </div>
        <div className="price-box">
          <h2 className="noto">Total Nodes</h2>
          <div>
            <CountUp
              end={70}
              duration={5}
              suffix="K"
              start={viewPortEntered ? null : 0}
            >
              {({ countUpRef }) => {
                return (
                  <VisibilitySensor
                    active={!viewPortEntered}
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setViewPortEntered(true);
                      }
                    }}
                    delayedCall
                  >
                    <p className={"kanit"} ref={countUpRef}></p>
                  </VisibilitySensor>
                );
              }}
            </CountUp>
          </div>
        </div>
        <div className="price-box">
          <h2 className="noto">Treasury Invested</h2>
          <div>
            <CountUp
              end={5}
              duration={2}
              suffix="M+"
              start={viewPortEntered ? null : 0}
            >
              {({ countUpRef }) => {
                return (
                  <VisibilitySensor
                    active={!viewPortEntered}
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setViewPortEntered(true);
                      }
                    }}
                    delayedCall
                  >
                    <p className={"kanit"} ref={countUpRef}></p>
                  </VisibilitySensor>
                );
              }}
            </CountUp>
          </div>
        </div>
        <div className="price-box">
          <h2 className="noto">Market Cap</h2>
          <div>
            <sup>$</sup>{" "}
            <CountUp
              end={174}
              duration={5}
              suffix="M"
              start={viewPortEntered ? null : 0}
            >
              {({ countUpRef }) => {
                return (
                  <VisibilitySensor
                    active={!viewPortEntered}
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setViewPortEntered(true);
                      }
                    }}
                    delayedCall
                  >
                    <p className={"kanit"} ref={countUpRef}></p>
                  </VisibilitySensor>
                );
              }}
            </CountUp>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
