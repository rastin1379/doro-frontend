import React from "react";
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
} from "../../styles/QuestionnaireStyles";
import stylingImg from "../../assets/curvesStyling.svg";
import DoroCard from "../DoroCard";
import {
  feature1Styles,
  feature3Styles,
  featureContainerStyles,
  featureBoxStyles,
} from "../../styles/FeaturesStyles";

const Questionnaires = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const cardsData = [
    {
      title: "GAD-7",
      description:
        "Measures anxiety severity to help detect generalized anxiety disorder",
      questions: "10 Questions",
      time: "10 min",
    },
    {
      title: "PHQ-9",
      description:
        "Assesses depression severity to aid in identifying and diagnosing depressive disorders",
      questions: "10 Questions",
      time: "10 min",
    },
    {
      title: "BDI-II",
      description:
        "Evaluates the severity of depression in individuals, aiding in diagnosis",
      questions: "10 Questions",
      time: "10 min",
    },
    {
      title: "STAI",
      description:
        "Assesses anxiety levels distinguishing between state and trait anxiety",
      questions: "10 Questions",
      time: "10 min",
    },
    {
      title: "ASRS",
      description:
        "Helps in identifying ADHD in adults with attention-related concerns",
      questions: "10 Questions",
      time: "10 min",
    },
    {
      title: "OCI-R",
      description:
        "Measures symptoms of Obsessive-Compulsive Disorder for diagnosis aid",
      questions: "10 Questions",
      time: "10 min",
    },
    {
      title: "PSS",
      description:
        "Evaluates perceived stress to understand coping with life demands",
      questions: "10 Questions",
      time: "10 min",
    },
    {
      title: "IES-R",
      description: "Assesses subjective distress caused by traumatic events",
      questions: "10 Questions",
      time: "10 min",
    },
  ];

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
          />
        ))}
      </div>
      <button style={viewMoreButtonStyles}>View More</button>
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
                textAlign: "left",
                lineHeight: "2",
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
        style={{...getStartedButtonStyles, textTransform: "none", marginTop: "5%"}}
        component={Link}
        to={isLoggedIn ? "/doro-test-start" : "/get-started"}
      >
        Get Started
      </Button>
    </div>
  );
};

export default Questionnaires;
