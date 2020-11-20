import React, { useState, useEffect } from "react";
import "../styles/CondoFitoutForm.css";

import emailjs from "emailjs-com";

import { motion } from "framer-motion";

import "survey-react/survey.css";
import * as Survey from "survey-react";

import { jsonCondo } from "../json/jsonCondo";

Survey.StylesManager.applyTheme("bootstrap");

function CondoFitoutForm() {
	const [responsesCondo, setResponsesCondo] = useState(null);

	const sendCondoData = (survey) => {
		console.log(survey.data);
		setResponsesCondo(survey.data);
	};

	useEffect(() => {
		const sendCondoDataToEmail = () => {
			const templateParams = {
				name: responsesCondo.name,
				contact_info: responsesCondo.contactInfo,
				project_address: responsesCondo.projectAddress,
				purpose: responsesCondo.purpose,
				target_date: responsesCondo.targetDate,
				floor_area: responsesCondo.floorArea,
				ceiling: responsesCondo.ceiling,
				flooring: responsesCondo.floooring,
				bathroom_wall_tiles: responsesCondo.bathroomWallTiles,
				lavatory: responsesCondo.lavatory,
				shower_area: responsesCondo.showerArea,
				kitchen_cabinets: responsesCondo.kitchenCabinets,
				kitchen_top: responsesCondo.kitchenTop,
				kitchen_sink: responsesCondo.kitchenSink,
				kitchen_splash_board: responsesCondo.kitchenSplashBoard,
				living_dining_area: responsesCondo.livingDiningArea,
				tv_console_finish: responsesCondo.tvConsoleFinish,
				study_table: responsesCondo.studyTable,
				storage: responsesCondo.storage,
				storage_finish: responsesCondo.storageFinish,
				bedroom_door: responsesCondo.bedroomDoor,
				wardrobe_design: responsesCondo.wardrobeDesign,
				partition: responsesCondo.partition,
				requests: responsesCondo.requests,
				file_upload: responsesCondo.fileUpload,
				file_upload_two: responsesCondo.fileUploadTwo,
			};

			emailjs
				.send(
					"cmd forms",
					"cmdcondoform",
					templateParams,
					"user_Tl5MI9L2KzofnSmBc6uCL"
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);
		};
		if (responsesCondo) {
			sendCondoDataToEmail();
		}
	}, [responsesCondo]);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ type: "opacity", delay: 0.2 }}
			className="condoForm"
		>
			<Survey.Survey json={jsonCondo} onComplete={sendCondoData} />
		</motion.div>
	);
}

export default CondoFitoutForm;
