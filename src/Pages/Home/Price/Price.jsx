import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

import "./Price.css";
function Price() {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <div className="price">
      <div className="price-box">
        <h2 className="noto">Market Price</h2>
        <p className="kanit">
          <sup>$</sup>
          <CountUp
            end={174.1}
            duration={8}
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
                  <p className={"kanit"} ref={countUpRef} />
                </VisibilitySensor>
              );
            }}
          </CountUp>
        </p>
      </div>
      <div className="price-box">
        <h2 className="noto">Total Nodes</h2>
        <p className="kanit">
          {" "}
          <CountUp
            end={70}
            duration={8}
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
                  <p className={"kanit"} ref={countUpRef} />
                </VisibilitySensor>
              );
            }}
          </CountUp>
        </p>
      </div>
      <div className="price-box">
        <h2 className="noto">Treasury Invested</h2>
        <p className="kanit">
          {" "}
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
                  <p className={"kanit"} ref={countUpRef} />
                </VisibilitySensor>
              );
            }}
          </CountUp>
        </p>
      </div>
      <div className="price-box">
        <h2 className="noto">Market Cap</h2>
        <p className="kanit">
          <sup>$</sup>{" "}
          <CountUp
            end={174}
            duration={8}
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
                  <p className={"kanit"} ref={countUpRef} />
                </VisibilitySensor>
              );
            }}
          </CountUp>
        </p>
      </div>
    </div>
  );
}

export default Price;