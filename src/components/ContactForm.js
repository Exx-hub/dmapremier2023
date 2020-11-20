import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/ContactForm.css";

function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [message, setMessage] = useState("");

	const sendEmail = async (e) => {
		e.preventDefault();

		const templateParams = {
			name: name,
			email: email,
			number: number,
			message: message,
		};

		emailjs
			.send(
				"landingpageform",
				"landingpageform",
				templateParams,
				"user_fkqEBgsIO6uWyQ9CfHLcH"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		setName("");
		setEmail("");
		setNumber("");
		setMessage("");
	};
	return (
		<div>
			<form className="contactForm" onSubmit={sendEmail}>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Name"
				/>

				<input
					type="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
				/>

				<input
					type="number"
					name="contact_number"
					value={number}
					onChange={(e) => setNumber(e.target.value)}
					placeholder="Contact"
					className="contactForm__number"
				/>

				<textarea
					name="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Type your message here..."
					rows="4"
				/>

				<button type="submit" disabled={!name || !email || !number || !message}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default ContactForm;
