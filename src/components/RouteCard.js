import React from "react";
import "../styles/RouteCard.css";

function RouteCard({ img, title, title2, subtitle, fblink }) {
	return (
		<div className="routeCard">
			<div className="routeCard__left">
				<img src={img} alt="" />
			</div>
			<div className="routeCard__bottom">
				<h1>{title}</h1>
				<h1>{title2}</h1>
				<h4>{subtitle}</h4>
				<p>
					<a href={fblink} target="_blank" rel="noreferrer" className="link">
						Read more..
					</a>
				</p>
				<p className="sendMessage">
					Send us a message <a href="/#contact">here</a> or you can email us at
					<a href="https://mail.google.com" target="_blank" rel="noreferrer">
						{" "}
						sales@cmdcorpph.com
					</a>
					.
				</p>
			</div>
		</div>
	);
}

export default RouteCard;
