import React, { useState, useEffect } from "react";
import "../styles/HouseDesignForm.css";

import emailjs from "emailjs-com";

import { motion } from "framer-motion";

import "survey-react/survey.css";
import * as Survey from "survey-react";

import { jsonHouse } from "../json/jsonHouse";

Survey.StylesManager.applyTheme("bootstrap");

function HouseDesignForm() {
  const [responses, setResponses] = useState(null);

  const sendHouseData = (survey) => {
    console.log(survey.data);
    setResponses(survey.data);
  };

  useEffect(() => {
    const sendHouseDataToEmail = () => {
      const templateParams = {
        name: responses.name,
        contact_info: responses.contactInfo,
        email: responses.email,
        project_address: responses.projectAddress,
        lot_area: responses.lotArea,
        target_date: responses.targetDate,
        floor_area: responses.floorArea,
        purpose: responses.purpose,
        budget: responses.budget,
        ground_floor: responses.groundFloorRooms,
        floor_area_second: responses.floorArea2nd,
        second_floor: responses.secondFloorRooms,
        third_floor: responses.thirdFloorRooms,
        land_title: responses.landTitle,
        garage_requirements: responses.garageRequirements,
        living_area_layout: responses.livingAreaLayout,
        total_bedroom_count: responses.totalBedroomCount,
        toilet_and_bath: responses.toiletAndBath,
        house_style: responses.houseStyle,
        wall_finish: responses.wallFinish,
        flooring: responses.flooring,
        file: responses.fileUpload,
      };

      emailjs
        .send(
          "cmd forms",
          "cmdhomeform",
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
    if (responses) {
      sendHouseDataToEmail();
    }
  }, [responses]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "opacity", delay: 0.2 }}
      className="houseForm"
    >
      <Survey.Survey json={jsonHouse} onComplete={sendHouseData} />
    </motion.div>
  );
}

export default HouseDesignForm;
