import React, { useEffect, useRef, useState } from "react";
import "../styles/Slogan.css";
import Button from "@material-ui/core/Button";

import { gsap } from "gsap";

function Slogan() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setVisible(true);
		}, 500);

		return () => clearTimeout(timeout);
	}, []);

	const sloganTextRef = useRef(null);

	useEffect(() => {
		const tl = gsap.timeline();
		tl.from(sloganTextRef.current, {
			duration: 2,
			y: 100,
			autoAlpha: 0,
			ease: "none",
		});
	}, []);

	return (
		<div className={`slogan ${visible && "visible"}`}>
			<div className="slogan__overlay"></div>
			<div className="slogan__text" ref={sloganTextRef}>
				<h1>We Design</h1>
				<hr />
				<h1>We Build</h1>
				<hr />
				<h1>We Deliver</h1>
				<a href="#contact" className="button">
					<Button>Get in touch</Button>
				</a>
			</div>
		</div>
	);
}

export default Slogan;
