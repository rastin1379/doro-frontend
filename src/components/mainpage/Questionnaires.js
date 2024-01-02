import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { selectIsLoggedIn } from "../../store/slices/authSlice";
import { Paper, Typography } from "@mui/material";
import {
  questionnaireHeaderStyles,
  headerStyles,
  doroContainerStyles,
  viewMoreButtonStyles,
  viewButtonHover,
  getStartedButtonStyles,
  getStartedButtonHoverStyle,
} from "../../styles/QuestionnaireStyles";
import stylingImg from "../../assets/curvesStyling.png";
import DoroCard from "../DoroCard";
import {
  feature1Styles,
  feature3Styles,
  featureContainerStyles,
  featureBoxStyles,
} from "../../styles/FeaturesStyles";

const Questionnaires = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [hover, setHover] = useState(false);
  const [viewHover,setViewHover] = useState(false);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/ptests/");
        const formattedData = response.data.slice(0, 8).map((item) => ({
          title: item.abbreviation,
          description: item.summary,
          questions: `${item.statements} Questions`,
          time: item.duration.replace("minutes", "min"),
          id: item.id,
        }));
        setCardsData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const enables = [
    {
      description:
        "Doro allows you to identify potential mental health vulnerabilities through a structured conversation. The subsequent recommendations for official mental health questionnaires provide a pathway for you to take informed actions, such as seeking professional advice, based on credible sources.",
      style: feature1Styles,
    },
    {
      description:
        "Doro offers mental health practitioners an initial screening tool to better understand their clients' potential vulnerabilities, gaining additional data points for more comprehensive analysis and treatment planning by directing clients to established questionnaires.",
      style: feature3Styles,
    },
  ];

  return (
    <div>
      <div style={questionnaireHeaderStyles}>
        <img src={stylingImg} alt="" />
        <h2 style={headerStyles} elevation={2}>
          Questionnaires
        </h2>
      </div>
      <div className="doro-container" style={doroContainerStyles}>
        {cardsData.map((card, index) => (
          <DoroCard
            key={index}
            title={card.title}
            description={card.description}
            questions={card.questions}
            time={card.time}
            id={card.id}
          />
        ))}
      </div>
      <button 
        style={{
          ...viewMoreButtonStyles,
          ...(viewHover ? viewButtonHover : {}),
          textTransform: "none",
        }}
        onMouseEnter={() => setViewHover(true)}
        onMouseLeave={() => setViewHover(false)}
        component={Link}
      >
        <Link
          to="/resources"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          View More
        </Link>
      </button>
      <h2 style={headerStyles} elevation={2}>
        Doro enables ...
      </h2>
      <div style={featureContainerStyles}>
        {enables.map((enable, index) => (
          <Paper
            key={index}
            style={{
              ...featureBoxStyles,
              ...enable.style,
              width: "30%",
            }}
            elevation={3}
          >
            <Typography
              style={{
                textAlign: "justify",
                lineHeight: "2.0",
                ...(index === 1 ? { paddingBottom: "40px" } : {}),
              }}
            >
              {enable.description}
            </Typography>
          </Paper>
        ))}
      </div>
      <h2 style={headerStyles} elevation={2}>
        Start your first session!
      </h2>
      <Button
        style={{
          ...getStartedButtonStyles,
          ...(hover ? getStartedButtonHoverStyle : {}),
          textTransform: "none",
          marginTop: "5%",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        component={Link}
        to={isLoggedIn ? "/doro-test-start" : "/get-started"}
      >
        Get Started
      </Button>
    </div>
  );
};

export default Questionnaires;
