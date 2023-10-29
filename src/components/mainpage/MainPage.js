import React from "react";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Mission from "./Mission";
import Questionnaires from "./Questionnaires";
import Footer from "../Footer";

function MainPage() {
  return (
    <div className="mainpage">
      <HeroSection />
      <Features />
      <Mission />
      <Questionnaires />
      <Footer />
    </div>
  );
}

export default MainPage
