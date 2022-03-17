import React, { useEffect, useState } from "react";
import "../styles/Forms.css";

import { motion } from "framer-motion";

import house from "../assets/images/zen.jpg";
import condo from "../assets/images/condofitout.png";

import { Link } from "react-router-dom";

function Forms() {
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
      className="forms"
    >
      <div className="forms__title">
        <h1>
          <span>YOUR</span> DREAM
          <span>
            <strong>.</strong>
          </span>{" "}
          <span>YOUR</span> PLAN
          <span>
            <strong>.</strong>
          </span>
        </h1>
        <p>We Are Here To Help</p>
        <h5>Choose and fill out the design checklist that you need.</h5>
      </div>

      <div className={`forms__options ${visible && "visible"}`}>
        <div className="forms__card">
          <Link to="/forms/house">
            <img src={house} alt="" className="forms__image" />
            <h3>House Design Checklist</h3>
          </Link>
        </div>

        <div className="forms__card">
          <Link to="/forms/fitouts">
            <img src={condo} alt="" className="forms__image" />
            <h3>Condo Fitout Checklist</h3>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Forms;
