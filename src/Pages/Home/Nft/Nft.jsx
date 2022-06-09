import React, { useState } from "react";
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
  const DetailsVariants = {
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      x: "100vw",
      transition: {
        duration: 1,
      },
    },
    initial: {
      opacity: 0,
      x: "-100vw",
    },
  };
  return (
    <div className="nft">
      <h1 className="heading trajan">NFT</h1>
      <AnimatePresence exitBeforeEnter>
        {detailes ? (
          <motion.div
            key={detailes}
            variants={DetailsVariants}
            initial={"initial"}
            exit={"exit"}
            animate={"enter"}
            className="detail-div"
          >
            <img src={big_temp} alt="" className="detail-img" />
            <h2 className="trajan">{name}</h2>
            <div className="cost-div">
              <div className="cost-col">
                <p className="noto">Cost</p>
                <span className="sup-span">
                  <h3 className="kanit">12.5</h3>
                  <sup className="kanit">{name}</sup>
                </span>
              </div>
              <hr />
              <div className="cost-col">
                <p className="noto">Rewards</p>
                <span className="sup-span">
                  <h3 className="kanit">0.144</h3>
                  <sup className="kanit">
                    {name} <span>/DAY</span>
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
            initial={"initial"}
            exit={"exit"}
            animate={"enter"}
            className="nft-grid"
          >
            <div className="nft-box">
              <div className="text-part">
                <h2 className="trajan">Heimdall</h2>
                <FontAwesomeIcon
                  onClick={() => {
                    setDetailes(true);
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
  );
}

export default Nft;
