import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "./Slider.css";
import union from "../../../Assets/icons/small-un.svg";
import icon1 from "../../../Assets/icons/daas-icon.svg";
function Slider() {
  return (
    <div className="slider">
      <h1 className="heading">ECOSYSTEM</h1>
      <Splide
        options={{
          focus: "center",
          pagination: false,
          arrows: false,
          perPage: 3,
          perMove: 1,
          direction: "ltr",
          width: "100%",
          gap: "2rem",
          drag: true,
          type: "loop",
          autoplay: true,
          interval: 5000,
          breakpoints: {
            1050: {
              perPage: 1,
              focus: false,
            },
          },
        }}
        aria-label="React Splide Example"
      >
        <SplideSlide>
          <div className="slide-box ">
            <img src={icon1} className={"icon"} alt="" />
            <img src={union} alt="" className="union" />
            <p className="kanit box-head">Defi as a Service (DaaS)</p>
            <p className="kanit box-desc">
              DaaS is a cryptocurrency equivalent of a mutual fund of which Thor
              Financial was founded on. Utilizing the treasury, the protocol
              will open positions into viable assets to further grow and return
              gains to shareholders in our protocol
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="slide-box ">
            <img src={icon1} className={"icon"} alt="" />
            <img src={union} alt="" className="union" />
            <p className="kanit box-head">Defi as a Service (DaaS)</p>
            <p className="kanit box-desc">
              A P2E (Play-To-Earn) is the first major installment in the
              ecosystem by Thor Financial. Funding the initial development of
              the project, Thor Financial holds 30% of revenue share and have
              the protocols native token, $THOR, become a governance token for
              the entirety of the game.
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="slide-box">
            <img src={icon1} className={"icon"} alt="" />
            <img src={union} alt="" className="union" />
            <p className="kanit box-head">Defi as a Service (DaaS)</p>
            <p className="kanit box-desc">
              Major Installment, housed in within Thor Ecosystem to promote and
              tie in all Ecosystem products. Within [Redacted], Thor Financial
              will be able to utilize its native token, $THOR, in a fashion of
              ways to contribute to the overall health of the Ecosystem.
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="slide-box">
            <img src={icon1} className={"icon"} alt="" />
            <img src={union} alt="" className="union" />
            <p className="kanit box-head">Defi as a Service (DaaS)</p>
            <p className="kanit box-desc">
              DaaS is a cryptocurrency equivalent of a mutual fund of which Thor
              Financial was founded on. Utilizing the treasury, the protocol
              will open positions into viable assets to further grow and return
              gains to shareholders in our protocol
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="slide-box">
            <img src={icon1} className={"icon"} alt="" />
            <img src={union} alt="" className="union" />
            <p className="kanit box-head">Defi as a Service (DaaS)</p>
            <p className="kanit box-desc">
              DaaS is a cryptocurrency equivalent of a mutual fund of which Thor
              Financial was founded on. Utilizing the treasury, the protocol
              will open positions into viable assets to further grow and return
              gains to shareholders in our protocol
            </p>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Slider;
