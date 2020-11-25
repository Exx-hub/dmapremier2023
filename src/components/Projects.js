import React, { useEffect, useState } from "react";
import "../styles/Projects.css";

import { motion } from "framer-motion";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import marikina from "../projectimages/marikina.jpg";
import zamba from "../projectimages/zambales.jpg";
import zambatwo from "../projectimages/zambalestwo.jpg";
import makati from "../projectimages/makati.jpg";
import tomas from "../projectimages/tomas.jpg";
import laguna from "../projectimages/laguna.jpg";
import erod from "../projectimages/erod.jpg";
import erodtwo from "../projectimages/erodtwo.jpg";
import batangas from "../projectimages/batangas.jpg";
import taytay from "../projectimages/taytay.jpg";
import nueva from "../projectimages/nueva.jpg";

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
					autoPlayInterval={5000}
					autoPlayStrategy="all"
					infinite={true}
					disableButtonsControls={true}
				>
					<img src={marikina} alt="" className="d-block w-100" />
					<img src={makati} alt="" className="d-block w-100" />
					<img src={tomas} alt="" className="d-block w-100" />
					<img src={laguna} alt="" className="d-block w-100" />
					<img src={erod} loading="lazy" alt="" className="d-block w-100" />
					<img src={erodtwo} loading="lazy" alt="" className="d-block w-100" />
					<img src={batangas} loading="lazy" alt="" className="d-block w-100" />
					<img src={taytay} loading="lazy" alt="" className="d-block w-100" />
					<img src={zamba} loading="lazy" alt="" className="d-block w-100" />
					<img src={zambatwo} loading="lazy" alt="" className="d-block w-100" />
					<img src={nueva} loading="lazy" alt="" className="d-block w-100" />
				</AliceCarousel>
			</div>
		</motion.div>
	);
}

export default Projects;
