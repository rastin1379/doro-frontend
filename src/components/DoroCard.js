import React from 'react';
import '../styles/DoroCard.css';
import penImg from '../assets/icons/pen.svg'
import clockImg from '../assets/icons/clock.svg'

const DoroCard = ({ title, description, questions, time }) => {
  return (
    <div className="doro-card" style={{'--dynamic-title': `"${title}"`}}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="doro-info">
        <span> <img src={penImg} alt="" className="info-icon" /> 10 Questions </span>
        <span> <img src={clockImg} alt="" className="info-icon" /> 10 min</span>
      </div>
    </div>
  );
}

export default DoroCard;
