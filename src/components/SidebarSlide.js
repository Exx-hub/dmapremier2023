import React, { useEffect, useState } from "react";
import "../styles/SidebarSlide.css";
import { useHistory } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";

import cmdlogo from "../assets/images/cmdfooter.png";
import cityhall from "../assets/images/taytaycityhall.png";
import bir from "../assets/images/birlogo.png";
import sec from "../assets/images/seclogo.png";

function SidebarSlide({ show, setShow }) {
  const [handleMove, setHandleMove] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandleMove(true);
      } else {
        setHandleMove(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  const history = useHistory();

  const goToHome = () => {
    history.push("/");
    setShow(false);
  };
  const goToProjects = () => {
    history.push("/projects");
    setShow(false);
  };
  const goToForms = () => {
    history.push("/forms");
    setShow(false);
  };
  const goToServices = () => {
    history.push("/services");
    setShow(false);
  };

  return (
    <div className={show ? "sidebarSlide active" : "sidebarSlide"}>
      <div className="sidebarSlide__left">
        <div className="sidebarSlide__nav">
          <img src={cmdlogo} alt="" />
          <p onClick={goToHome}>HOME</p>
          <p onClick={goToServices}>SERVICES</p>
          <p onClick={goToProjects}>PROJECTS</p>
          <p onClick={goToForms}>FORMS</p>
          <p>
            <a
              href="https://www.facebook.com/CMDPioneerConstCorp"
              target="_blank"
              rel="noopener noreferrer"
              className="socmed"
            >
              SOCIAL MEDIA
            </a>
          </p>
          <p>
            <a href="/#contact" className="contact">
              CONTACT US
            </a>
          </p>
        </div>

        <div
          className={`sidebarSlide__bottom ${
            handleMove ? "bottom__moveUp" : ""
          }`}
        >
          <div className="sidebarSlide__bottom--logos">
            <img src={bir} alt="" />
            <img src={cityhall} alt="" />

            <img src={sec} alt="" />
          </div>

          <p>Copyright © 2020 CMD Pioneer Construction Corporation</p>
        </div>
      </div>
      <div
        className={
          show ? "sidebarSlide__side activeSide" : "sidebarSlide__side"
        }
      >
        <CloseIcon onClick={() => setShow(false)} />
      </div>
    </div>
  );
}

export default SidebarSlide;
