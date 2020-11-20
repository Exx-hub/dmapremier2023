import React from "react";
import "../styles/ServicesRoute.css";
import RouteCard from "./RouteCard";

import { motion } from "framer-motion";

import house from "../servicesimages/house.jpg";
import condo from "../servicesimages/condofitout.jpg";
import restoration from "../servicesimages/restorationworks.jpg";
import renovation from "../servicesimages/renovation.png";
import commercial from "../servicesimages/commercial.png";
import office from "../servicesimages/office.jpg";
import feeder from "../servicesimages/feeder.jpg";
import zamba from "../servicesimages/zamba.png";
import lab from "../servicesimages/lab.jpg";

function ServicesRoute() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ type: "opacity", delay: 0.2 }}
			className="servicesRoute"
		>
			<div className="servicesRoute__text">
				<h1>
					<span>OUR</span> SERVICES
				</h1>
				<p>What We Can Do For You</p>
			</div>

			<RouteCard
				img={condo}
				title="Condo Fitout Needs?"
				subtitle="Victoria De Morato, Quezon City"
				fblink="https://www.facebook.com/CMDPioneerConstCorp/photos/a.180474550028637/389888189087271/"
			/>
			<RouteCard
				img={house}
				title="House Construction Needs?"
				subtitle="Night and Day View House Design"
				fblink="https://www.facebook.com/CMDPioneerConstCorp/photos/a.180474550028637/394487798627310/"
			/>
			<RouteCard
				img={restoration}
				title="Restoration Needs?"
				subtitle="Dismantling, Restoration works and Repainting"
				fblink="https://www.facebook.com/CMDPioneerConstCorp/photos/a.180474550028637/373221407420616/"
			/>
			<RouteCard
				img={renovation}
				title="Home Renovation Needs?"
				subtitle="Cosmetic / Partial Renovation or Expansion"
				fblink="https://www.facebook.com/CMDPioneerConstCorp/photos/a.180474550028637/183931136349645/"
			/>
			<RouteCard
				img={commercial}
				title="Architectural and Engineering Plans?"
				title2="( M E F P S )"
				subtitle="Mer - Nel's Commissary, 2-storey building"
				fblink="https://www.facebook.com/CMDPioneerConstCorp/photos/a.143427597066666/182792396463519/"
			/>
			<RouteCard
				img={office}
				title="Office Renovation Needs?"
				subtitle="Proposed Office Renovation in Pasay"
				fblink="https://www.facebook.com/CMDPioneerConstCorp/photos/a.180474550028637/183555426387216/"
			/>
			<RouteCard
				img={feeder}
				title="Electrical Needs?"
				subtitle="FEEDER LINE PROJECT at Nueva Vizcaya"
				fblink="https://www.facebook.com/CMDPioneerConstCorp/photos/a.180474550028637/200422944700464/"
			/>

			<RouteCard
				img={zamba}
				title="Resort Construction Needs?"
				subtitle="Kwentong Dagat, Zambales"
				fblink="https://www.facebook.com/CMDPioneerConstCorp/photos/a.180474550028637/183940873015338/"
			/>
			<RouteCard
				img={lab}
				title="Room Remodeling Needs?"
				subtitle="MOLECULAR Laboratory (negative pressure room) "
				fblink="https://www.facebook.com/CMDPioneerConstCorp/photos/a.180474550028637/304641594278598/"
			/>
		</motion.div>
	);
}

export default ServicesRoute;
