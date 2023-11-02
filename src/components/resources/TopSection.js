import React from "react";
import resourcesBanner from "../../assets/ResourcesBanner.png";
import Navbar from "../Navbar";
import "../../styles/TopSection.css";

function TopSection() {
  return (
    <div className="resources-section">
      <Navbar />
      <img src={resourcesBanner} alt="" className="resources-banner" />
      <div className="text-content-resources">
        <h1 style={{ fontWeight: "900" }}>How does it work?</h1>
        <p>
          Doro's database page offers validated mental health questionnaires.
          While Doro may suggest them, you can take them at any time. These
          assessments alone don’t confirm a mental health condition, as a
          thorough diagnosis requires professional guidance. Yet, they can aid
          in early symptom identification and foster informed discussions with
          healthcare providers.
        </p>
      </div>
    </div>
  );
}

export default TopSection;
