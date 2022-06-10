import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "./Slider.css";
import SliderBox from "../../../Components/SliderBox/SliderBox";
import icon1 from "../../../Assets/icons/daas-icon.svg";
import icon2 from "../../../Assets/icons/p2e-icon.svg";
import icon3 from "../../../Assets/icons/metaverse-icon.svg";
import icon4 from "../../../Assets/icons/farm-lottery-icon.svg";
import icon5 from "../../../Assets/icons/nft-marketplace-icon.svg";
import icon6 from "../../../Assets/icons/random-icon.svg";
function Slider() {
  const data = [
    {
      title: "Defi-as-a-Service",
      desc: "DaaS is a cryptocurrency equivalent of a mutual fund of which Thor Financial was founded on. Utilizing the treasury, the protocol will open positions into viable assets to further grow and return gains to shareholders in our protocol",
      img: icon1,
      redact: false,
    },
    {
      title: "Gods of Asgard",
      desc: "A P2E (Play-To-Earn) is the first major installment in the ecosystem by Thor Financial. Funding the initial development of the project, Thor Financial holds 30% of revenue share and have the protocols native token, $THOR, become a governance token for the entirety of the game.",
      img: icon2,
      redact: false,
    },
    {
      title: "Metaverse",
      desc: "Metaverse will be the next installment in Thor Financial Ecosystem, in which an Asgardian World will be built on a land plot in SANDBOX allowing our community to be immersed and hangout. Utilities will be further announced. ",
      img: icon3,
      redact: false,
    },
    {
      title: "Staking & Lottery",
      desc: "Need description",
      img: icon4,
      redact: false,
    },
    {
      title: "NFT Marketplace",
      desc: "coming soon",
      img: icon5,
      redact: false,
    },
    {
      title: "",
      desc: "Major Installment, housed within Thor Ecosystem to promote and tie in all Ecosystem products. Within [Redacted], Thor Financial will be able to utilize its native token, $THOR, in a fashion of ways to contribute to the overall health of the Ecosystem. ",
      img: icon6,
      redact: true,
    },
  ];

  return (
    <div id="eco" className="slider">
      <h1 className="heading">ECOSYSTEM</h1>
      <Splide
        options={{
          rewind: true,
          focus: "center",
          pagination: false,
          arrows: false,
          perPage: 2.5,
          perMove: 1,
          direction: "ltr",
          width: "100%",
          gap: "2rem",
          drag: true,
          autoplay: true,
          interval: 5000,
          breakpoints: {
            1050: {
              perPage: 3,
            },
            600: {
              perPage: 1,
            },
          },
        }}
        aria-label="React Splide Example"
      >
        {data.map((elem, idx) => {
          return (
            <SplideSlide key={"slider" + idx}>
              <SliderBox
                title={elem.title}
                desc={elem.desc}
                img={elem.img}
                redact={elem.redact}
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Slider;
