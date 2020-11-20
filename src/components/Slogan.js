import React, { useEffect, useRef } from "react";
import "../styles/Slogan.css";
import Button from "@material-ui/core/Button";

import { gsap } from "gsap";

import { motion } from "framer-motion";

function Slogan() {
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
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ type: "opacity", delay: 0.2 }}
			className="slogan"
		>
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
		</motion.div>
	);
}

export default Slogan;
