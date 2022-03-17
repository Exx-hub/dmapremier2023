import React from "react";
import "../styles/TeamPage.css";
import Card from "./Card";

import ceo from "../assets/images/tepyonim.jpg";
import coo from "../assets/images/coo.jpg";
import poh from "../assets/images/poh.png";

function TeamPage() {
  return (
    <div className="teamPage">
      <div className="teamPage__text">
        <h1>
          <span>MEET THE</span> TEAM
        </h1>
        <p>Our Experts</p>
      </div>
      <div className="teamPage__grid">
        <Card
          img={ceo}
          name="Engr. David Acosta"
          title="Chief Executive Officer"
        />
        <Card
          img={coo}
          name="Engr. Mercado Mercado"
          title="Chief Operations Officer"
        />
        <Card
          img={poh}
          name="Engr. Aristel Dotimas"
          title="Project Operations Head"
        />
      </div>
    </div>
  );
}

export default TeamPage;
