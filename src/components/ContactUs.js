import React from "react";
import "../styles/ContactUs.css";

import { motion } from "framer-motion";

import ContactForm from "./ContactForm";

import FacebookIcon from "@material-ui/icons/Facebook";

function ContactUs() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ type: "opacity", delay: 0.2 }}
			className="contactUs"
		>
			<div className="contactUs__left" id="contact">
				<div className="contactUs__leftText">
					<h1>
						CONTACT <span>US</span>
					</h1>
					<p>We'd Like To Hear From You</p>
				</div>

				<ContactForm />
			</div>
			<div className="contactUs__right">
				<div className="contactUs__rightMap">
					<iframe
						title="map"
						id="gmap_canvas"
						src="https://maps.google.com/maps?q=14%C2%B034'04.5%22N%20121%C2%B007'27.9%22E&t=&z=15&ie=UTF8&iwloc=&output=embed"
						frameBorder="0"
					></iframe>
				</div>
				<div className="contactUs__rightLocation">
					<h1>
						<span>OUR</span> LOCATION
					</h1>
					<p>Unit-J 9005 Highway 2000 Phase 2</p>
					<p> Sta. Ana Taytay Rizal</p>
					<p>sales@cmdcorpph.com</p>
					<p> (02) 7-9718374 </p>
					<p>(0917) 1437659</p>
					<a
						href="https://www.facebook.com/CMDPioneerConstCorp"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FacebookIcon fontSize="large" />
					</a>
				</div>
			</div>
		</motion.div>
	);
}

export default ContactUs;
