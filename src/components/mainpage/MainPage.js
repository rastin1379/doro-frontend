import React from "react";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Mission from "./Mission";
import Questionnaires from "./Questionnaires";
import Footer from "../Footer";
import '../../styles/MainPage.css'

function MainPage() {
  return (
    <div className="mainpage fade-in">
      <HeroSection />
      <Features />
      <Mission />
      <Questionnaires />
      <Footer />
    </div>
  );
}

export default MainPage
