import React from "react";
import "../styles/ServiceCard.css";

function ServiceCard({ img, title, description1, description2 }) {
	return (
		<div className="serviceCard">
			<div className="serviceCard__image">
				<img src={img} alt="" />
			</div>
			<div className="serviceCard__text">
				<h2>{title}</h2>
				<ul>
					<li>{description1}</li>
					<li>{description2}</li>
				</ul>
			</div>
		</div>
	);
}

export default ServiceCard;
