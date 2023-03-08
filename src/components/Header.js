import React, { useState } from "react";
import "../styles/Header.css";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import SidebarSlide from "./SidebarSlide";

import dmaLogo from "../assets/dma/dmahorizontal.png";

function Header() {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };
  const goToProjects = () => {
    history.push("/projects");
  };
  const goToForms = () => {
    history.push("/forms");
  };

  return (
    <div className="header__container">
      <div className="header">
        <div className="header__left" onClick={goToHome}>
          <img src={dmaLogo} alt="" className="header__left--image" />
        </div>

        {/* burger menu here  */}
        <div
          className={show ? "toggle__button activeToggle" : "toggle__button"}
          onClick={() => setShow(!show)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className="header__nav">
          <p onClick={goToHome}>HOME</p>
          <p>
            <a href="/#services">SERVICES</a>
          </p>
          <p onClick={goToProjects}>PROJECTS</p>
          <p onClick={goToForms}>FORMS</p>
          <p>
            <a
              href="https://www.facebook.com/DMAPremierConstructionCorp"
              target="_blank"
              rel="noopener noreferrer"
            >
              SOCIAL MEDIA
            </a>
          </p>

          <a href="/#contact" className="headerButtonLink">
            <Button>Contact Us</Button>
          </a>
        </div>
      </div>

      <SidebarSlide show={show} setShow={setShow} />
    </div>
  );
}

export default Header;
