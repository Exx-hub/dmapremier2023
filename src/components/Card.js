import React from "react";
import "../styles/Card.css";

function Card({ img, name, title }) {
	return (
		<div className="card">
			<img className="card__image" src={img} alt="" />
			<h2 className="card__name">{name}</h2>
			<p className="card__title">{title}</p>
		</div>
	);
}

export default Card;
