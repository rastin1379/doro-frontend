import React from 'react';
import '../styles/DoroCard.css';
import { Link } from "react-router-dom";
import penImg from '../assets/icons/pen.svg'
import clockImg from '../assets/icons/clock.svg'

const DoroCard = ({ title, description, questions, time }) => {

    const linkStyle = {
      textDecoration: "none",
      color: "inherit",
    };

  return (
    <Link
      to={`/questionnaire/${encodeURIComponent(title)}`}
      className="doro-card-link"
      style={linkStyle}
    >
      <div className="doro-card" style={{ "--dynamic-title": `"${title}"` }}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="doro-info">
          <span>
            {" "}
            <img src={penImg} alt="" className="info-icon" /> {questions}{" "}
          </span>
          <span>
            {" "}
            <img src={clockImg} alt="" className="info-icon" /> {time}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default DoroCard;
