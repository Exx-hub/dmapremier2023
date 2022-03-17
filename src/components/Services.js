import React from "react";
import "../styles/Services.css";
import ServiceCard from "./ServiceCard";

import electrical from "../assets/images/electricalwork.jpeg";
import construction from "../assets/images/renovation.jpeg";
import dwork from "../assets/images/dwork.jpeg";
import design from "../assets/images/designwork.jpeg";

function Services() {
  return (
    <div className="services" id="services">
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
