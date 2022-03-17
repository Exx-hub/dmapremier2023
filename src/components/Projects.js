import React, { useEffect, useState } from "react";
import "../styles/Projects.css";

import { motion } from "framer-motion";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import ortigas from "../assets/projectAssets/11Ortigas.png";
import taytay from "../assets/projectAssets/12Taytay.png";
import marikina from "../assets/projectAssets/13Marikina.png";
import sushi from "../assets/projectAssets/14Sushi.png";
import sushi2 from "../assets/projectAssets/15Sushi2.png";
import cellshop from "../assets/projectAssets/16CellShops.png";
import laguna from "../assets/projectAssets/17Laguna.png";
import erod1 from "../assets/projectAssets/18ErodBef.png";
import erod2 from "../assets/projectAssets/19ErodAfter.png";
import klTower from "../assets/projectAssets/20KLTower.png";
import taytay2 from "../assets/projectAssets/21Taytay2.png";
import victoria from "../assets/projectAssets/22Victoria.png";
import victoria2 from "../assets/projectAssets/23Victoria2.png";
import victoria3 from "../assets/projectAssets/24Victoria3.png";
import amaia from "../assets/projectAssets/25Amaia.png";
import amaia2 from "../assets/projectAssets/26Amaia2.png";
import dmci from "../assets/projectAssets/28Dmci.png";
import dmci2 from "../assets/projectAssets/29Dmci2.png";
import dmci3 from "../assets/projectAssets/30Dmci3.png";
import feederLine from "../assets/projectAssets/31FeederLine.png";
import qcHouse from "../assets/projectAssets/32QCHouse.png";
import qcHouse2 from "../assets/projectAssets/33QCHouse2.png";
import qcHouse3 from "../assets/projectAssets/34QCHouse3.png";
import qcHouse4 from "../assets/projectAssets/35QCHouse4.png";
import qcHouse5 from "../assets/projectAssets/36QCHouse5.png";
import qcHouse6 from "../assets/projectAssets/37QCHouse6.png";
import graceMall from "../assets/projectAssets/38GraceMAll.png";
import qcCainta from "../assets/projectAssets/39QC-CAINTA.png";
import marikinaHouse from "../assets/projectAssets/40MarkinaHouse.png";
import cavite from "../assets/projectAssets/41Cavite.png";
import antipolo from "../assets/projectAssets/42Antips.png";
import batangas from "../assets/projectAssets/43BAtangas.png";

function Projects() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "opacity", delay: 0.5 }}
      className="projects"
    >
      <div className="projects__title">
        <h1>
          <span>OUR</span> WORK
        </h1>
        <p>A portfolio of our signature projects</p>
        <a href="/#contact">
          <button>REQUEST AN APPOINTMENT NOW</button>
        </a>
      </div>

      <div className={`projects__carousel ${visible && "visible"}`}>
        <AliceCarousel
          animationType="fadeout"
          animationDuration={800}
          autoPlay={true}
          autoPlayInterval={4000}
          autoPlayStrategy="all"
          infinite={true}
          disableButtonsControls={true}
          autoPlayControls
        >
          <img src={ortigas} alt="" className="d-block w-100" />
          <img src={sushi} alt="" className="d-block w-100" />
          <img src={sushi2} alt="" className="d-block w-100" />
          <img src={taytay} alt="" className="d-block w-100" />
          <img src={marikina} alt="" className="d-block w-100" />
          <img src={cellshop} alt="" className="d-block w-100" />
          <img src={laguna} alt="" className="d-block w-100" />
          <img src={erod1} alt="" className="d-block w-100" />
          <img src={erod2} alt="" className="d-block w-100" />
          <img src={klTower} alt="" className="d-block w-100" />
          <img src={taytay2} alt="" className="d-block w-100" />
          <img src={victoria} alt="" className="d-block w-100" />
          <img src={victoria2} alt="" className="d-block w-100" />
          <img src={victoria3} alt="" className="d-block w-100" />
          <img src={amaia} alt="" className="d-block w-100" />
          <img src={amaia2} alt="" className="d-block w-100" />
          <img src={dmci} alt="" className="d-block w-100" />
          <img src={dmci2} alt="" className="d-block w-100" />
          <img src={dmci3} alt="" className="d-block w-100" />
          <img src={feederLine} alt="" className="d-block w-100" />
          <img src={qcHouse} alt="" className="d-block w-100" />
          <img src={qcHouse2} alt="" className="d-block w-100" />
          <img src={qcHouse3} alt="" className="d-block w-100" />
          <img src={qcHouse4} alt="" className="d-block w-100" />
          <img src={qcHouse5} alt="" className="d-block w-100" />
          <img src={qcHouse6} alt="" className="d-block w-100" />
          <img src={graceMall} alt="" className="d-block w-100" />
          <img src={qcCainta} alt="" className="d-block w-100" />
          <img src={marikinaHouse} alt="" className="d-block w-100" />
          <img src={cavite} alt="" className="d-block w-100" />
          <img src={antipolo} alt="" className="d-block w-100" />
          <img src={batangas} alt="" className="d-block w-100" />
        </AliceCarousel>
      </div>
    </motion.div>
  );
}

export default Projects;
