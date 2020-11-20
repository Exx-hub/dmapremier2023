import React from "react";
import "../styles/Projects.css";

import { motion } from "framer-motion";

import { Carousel } from "react-bootstrap";

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
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ type: "opacity", delay: 0.2 }}
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

			<div className="projects__carousel">
				<Carousel fade={true} pause="hover">
					<Carousel.Item>
						<img src={marikina} alt="" className="d-block w-100" />
					</Carousel.Item>
					<Carousel.Item>
						<img src={zamba} alt="" className="d-block w-100" />
					</Carousel.Item>
					<Carousel.Item>
						<img src={zambatwo} alt="" className="d-block w-100" />
					</Carousel.Item>
					<Carousel.Item>
						<img src={makati} alt="" className="d-block w-100" />
					</Carousel.Item>
					<Carousel.Item>
						<img src={tomas} alt="" className="d-block w-100" />
					</Carousel.Item>
					<Carousel.Item>
						<img src={laguna} alt="" className="d-block w-100" />
					</Carousel.Item>
					<Carousel.Item>
						<img src={erod} alt="" className="d-block w-100" />
					</Carousel.Item>
					<Carousel.Item>
						<img src={erodtwo} alt="" className="d-block w-100" />
					</Carousel.Item>
					<Carousel.Item>
						<img src={batangas} alt="" className="d-block w-100" />
					</Carousel.Item>
					<Carousel.Item>
						<img src={taytay} alt="" className="d-block w-100" />
					</Carousel.Item>
					<Carousel.Item>
						<img src={nueva} alt="" className="d-block w-100" />
					</Carousel.Item>
				</Carousel>
			</div>
		</motion.div>
	);
}

export default Projects;
