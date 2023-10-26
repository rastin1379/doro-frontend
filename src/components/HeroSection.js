import React from 'react';
import girlChattingImg from '../assets/girlChattingWithBot.svg';
import Navbar from './Navbar';
import '../styles/HeroSection.css'; // Importing the styles

function HeroSection() {
  return (
    <div className="hero-section">
      <Navbar />
      <img src={girlChattingImg} alt="Girl chatting with bot"/>
      <button className="start-session-btn">Hey! Start the session?</button>
      <div className="text-content">
        <h1 style={{fontWeight: '900'}}>The Sooner The Better</h1>
        <p>Prevent manifestation of mental disorders by tracking your mental health vulnerabilities.</p>
      </div>
    </div>
  );
}

export default HeroSection;
