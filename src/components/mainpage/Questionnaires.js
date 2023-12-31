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
        "Doro enables early identification and management of potential mental health vulnerabilities through structured conversations and psychoeducation. Alongside guiding you through official mental health questionnaires, it provides a comprehensive pathway to prevent full manifestation and manage relapse, empowering you with information and strategies based on credible sources.",
      style: feature1Styles,
    },
    {
      description:
        "Doro provides practitioners with a tool for enhanced client monitoring and relapse detection, serving as an initial screening aid to identify vulnerabilities. Facilitating ongoing support and informed re-engagement, its integration during and post-therapy offers additional layers of understanding and tailored intervention, ensuring a proactive approach to each client's journey.",
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
      <button style={viewMoreButtonStyles}>
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
              width: "31%",
            }}
            elevation={3}
          >
            <Typography
              style={{
                textAlign: "justify",
                lineHeight: "2.0",
                padding: "8px 20px 8px 20px",
              }}
            >
              {enable.description}
            </Typography>
          </Paper>
        ))}
      </div>
      <h2 style={{ ...headerStyles, textShadow: '2px 2px 4px rgba(0,0,0,0.16)'}} elevation={2}>
        Start your first session!
      </h2>
      <Button
        style={{
          ...getStartedButtonStyles,
          ...(hover ? getStartedButtonHoverStyle : {}),
          textTransform: "none",
          marginTop: "4%",
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
