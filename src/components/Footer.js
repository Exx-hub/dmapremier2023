import React from "react";
import "../styles/Footer.css";

import cmdlogo from "../images/cmdfooter.png";
import cityhall from "../images/taytaycityhall.png";
import bir from "../images/birlogo.png";
import sec from "../images/seclogo.png";

import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);
  return (
    <div
      className={
        pathname === "/forms/house" || pathname === "/forms/fitouts"
          ? "footer hidden"
          : "footer"
      }
    >
      <div className="footer__left">
        <img src={cmdlogo} alt="" />
      </div>
      <div className="footer__middle">
        <p>Copyright © 2020 CMD Pioneer Construction Corporation</p>
        <p>All Rights Reserved</p>
      </div>
      <div className="footer__right">
        <img src={bir} alt="" />
        <img src={cityhall} alt="" />

        <img src={sec} alt="" />
      </div>
    </div>
  );
}

export default Footer;
