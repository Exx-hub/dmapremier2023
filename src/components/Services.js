import React from "react";
import "../styles/Services.css";
import ServiceCard from "./ServiceCard";

import electrical from "../images/electricalwork.jpeg";
import construction from "../images/renovation.jpeg";
import dwork from "../images/dwork.jpeg";
import design from "../images/designwork.jpeg";

function Services() {
	return (
		<div className="services">
			<div className="services__text">
				<h1>
					<span>OUR</span> SERVICES
				</h1>
				<p>What We Can Do For You</p>
			</div>
			<div className="services__grid">
				<ServiceCard
					img={electrical}
					title="Electrical Works"
					description1="Supply Installation / Erection"
					description2="Testing and Commissioning"
				/>
				<ServiceCard
					img={construction}
					title="Construction Works"
					description1="Construction, Renovation and Expansion"
					description2="Finishing and fit-out"
				/>
				<ServiceCard
					img={design}
					title="Design Works"
					description1="Perspective Design"
					description2="Rendering"
				/>
				<ServiceCard
					img={dwork}
					title="MEFPS Works"
					description1="Sign and Seal of plan"
					description2="Plan as built"
				/>
			</div>
		</div>
	);
}

export default Services;
