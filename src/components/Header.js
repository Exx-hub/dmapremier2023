import React, { useState } from "react";
import "../styles/Header.css";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

// import logo from "../images/CMDLogo.png";
import logo2 from "../images/cmdfooter.png";
import cmdblack from "../images/cmdblack.png";
import SidebarSlide from "./SidebarSlide";

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
	const goToServices = () => {
		history.push("/services");
	};

	return (
		<div className="header__container">
			<div className="header">
				<div className="header__left" onClick={goToHome}>
					<img src={logo2} alt="" className="header__left--imageLogo" />
					<img src={cmdblack} alt="" className="header__left--imageBlack" />
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
					<p onClick={goToServices}>SERVICES</p>
					<p onClick={goToProjects}>PROJECTS</p>
					<p onClick={goToForms}>FORMS</p>
					<p>
						<a
							href="https://www.facebook.com/CMDPioneerConstCorp"
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
