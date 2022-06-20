import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

import "./Nft.css";
import temp from "../../../Assets/temp.png";
import big_temp from "../../../Assets/big-temp.png";
// import Details from "../../../Components/Details/Details";

function Nft() {
  const [detailes, setDetailes] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [rewards, setRewards] = useState("");
  const [origin, setOrigin] = useState("");
  const mobile = window.innerWidth;
  useEffect(() => {
    if (mobile > 1184) {
      switch (name.toLowerCase()) {
        case "thor":
          setOrigin("top right");
          break;
        case "heimdall":
          setOrigin("top left");
          break;
        case "freya":
          setOrigin("bottom left");
          break;
        case "odin":
          setOrigin("bottom right");
          break;

        default:
          break;
      }
    }
  }, [name]);

  const DetailsVariants = {
    enter: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    enterDetails: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    exit2: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.7,
      },
    },
    initial: {
      opacity: 0,
    },
    initialDetails: {
      opacity: 0,
      scale: 0,
    },
    initialMobile: {
      opacity: 0,
      x: "-100vw",
    },
    exitMobile: {
      opacity: 0,
      x: "100vw",
      transition: {
        duration: 1,
      },
    },
    exit2Mobile: {
      opacity: 0,
      x: "-100vw",
      transition: {
        duration: 1,
      },
    },
    enterMobile: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="nft-container">
      <div className="nft-shadow-center"></div>
      <div className="nft-shadow-left"></div>
      <div className="nft">
        <h1 className="heading trajan">NFT</h1>
        <AnimatePresence exitBeforeEnter>
          {detailes ? (
            <motion.div
              key={detailes}
              variants={DetailsVariants}
              initial={mobile > 1184 ? "initialDetails" : "initialMobile"}
              exit={mobile > 1184 ? "exit2" : "exit2Mobile"}
              animate={mobile > 1184 ? "enterDetails" : "enterMobile"}
              className="detail-div"
              style={{ transformOrigin: origin }}
            >
              {console.log(origin)}
              <img src={big_temp} alt="" className="detail-img" />
              <h2 className="trajan">{name}</h2>
              <div className="cost-div">
                <div className="cost-col">
                  <p className="noto">Cost</p>
                  <span className="sup-span">
                    <h3 className="kanit">{price}</h3>
                    <sup className="kanit">{"THOR"}</sup>
                  </span>
                </div>
                <hr />
                <div className="cost-col">
                  <p className="noto">Rewards</p>
                  <span className="sup-span">
                    <h3 className="kanit">{rewards}</h3>
                    <sup className="kanit">
                      THOR <span>/DAY</span>
                    </sup>
                  </span>
                </div>
              </div>
              <FontAwesomeIcon
                onClick={() => {
                  setDetailes(false);
                }}
                icon={faChevronLeft}
              />
            </motion.div>
          ) : (
            <motion.div
              key={detailes}
              variants={DetailsVariants}
              initial={mobile > 1184 ? "initial" : "initialMobile"}
              exit={mobile > 1184 ? "exit" : "exitMobile"}
              animate={mobile > 1184 ? "enter" : "enterMobile"}
              className="nft-grid"
            >
              <div className="nft-box">
                <div className="text-part">
                  <h2 className="trajan">Heimdall</h2>
                  <FontAwesomeIcon
                    onClick={() => {
                      setDetailes(true);
                      setPrice(1.25);
                      setRewards(0.008);
                      setName("Heimdall");
                    }}
                    icon={faChevronRight}
                  />
                </div>
                <img src={temp} alt="" />
              </div>
              <div className="nft-box">
                <div className="text-part">
                  <h2 className="trajan">Thor</h2>
                  <FontAwesomeIcon
                    onClick={() => {
                      setDetailes(true);
                      setPrice(1.25);
                      setRewards(0.008);
                      setName("Thor");
                    }}
                    icon={faChevronRight}
                  />
                </div>
                <img src={temp} alt="" />
              </div>
              <div className="nft-box">
                <img src={temp} alt="" />
                <div className="text-part last-box">
                  <h2 className="trajan">Freya</h2>
                  <FontAwesomeIcon
                    onClick={() => {
                      setDetailes(true);
                      setPrice(6.25);
                      setRewards(0.05);
                      setName("Freya");
                    }}
                    icon={faChevronRight}
                  />
                </div>
              </div>
              <div className="nft-box">
                <img src={temp} alt="" />
                <div className="text-part last-box">
                  <h2 className="trajan">Odin</h2>
                  <FontAwesomeIcon
                    onClick={() => {
                      setDetailes(true);
                      setPrice(78.125);
                      setRewards(1.02);
                      setName("Odin");
                    }}
                    icon={faChevronRight}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Nft;
