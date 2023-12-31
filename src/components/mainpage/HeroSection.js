import React from 'react';
import girlChattingImg from '../../assets/girlChattingWithBot.svg';
import Navbar from '../Navbar';
import '../../styles/HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <Navbar />
      <img src={girlChattingImg} alt="Girl chatting with bot"/>
      <button className="start-session-btn">Get Started</button>
      <div className="text-content">
        <h1 style={{fontWeight: '900', fontSize: '37px'}}>The Sooner The Better</h1>
        <p style={{fontSize: '18px'}}>Prevent the manifestation of mental health conditions with early detection and intervention</p>
      </div>
    </div>
  );
}

export default HeroSection;
