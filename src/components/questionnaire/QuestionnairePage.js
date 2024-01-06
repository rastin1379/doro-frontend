import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ReactMarkdown from "react-markdown";
import "../../styles/QuestionnairePage.css";

const QuestionnairePage = () => {
  const { title, id } = useParams();
  const [questionnaire, setQuestionnaire] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const response = await axios.get(`/ptests/${id}/info`);
        setQuestionnaire(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [id]);

  const handleOptionChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const renderInfoBox = (title, content) => (
    <div className="questionnaire-box">
      <div className="questionnaire-content">
        <h2 className="basic-info-title">{title}</h2>
        {content}
      </div>
    </div>
  );

  const basicInfoContent = questionnaire ? (
    <>
      <p>
        <ReactMarkdown>
          {"Description: " + questionnaire?.description}
        </ReactMarkdown>
      </p>
      <p>
        Statements:<strong> {questionnaire.statements} </strong>
      </p>
      <p>
        Duration:<strong> {questionnaire.duration} </strong>
      </p>
      <p>
        Authors:<strong> {questionnaire.authors} </strong>
      </p>
      <p>
        Reference:
        <strong> {questionnaire.reference}</strong>
      </p>
    </>
  ) : null;

  const instructionContent = (
    <>
      <p>
        <ReactMarkdown>{questionnaire?.instructions}</ReactMarkdown>
      </p>
    </>
  );

  const scoringContent = (
    <p>
      <ReactMarkdown>{questionnaire?.scoring}</ReactMarkdown>
    </p>
  );

  const questionData = [
    {
      id: 1,
      text: "1. I prefer to do things with others rather than on my own.",
      options: [
        "Definitely Agree",
        "Slightly Agree",
        "Slightly Disagree",
        "Definitely Disagree",
      ],
    },
    {
      id: 2,
      text: "2. I prefer to do things the same way over and over again.",
      options: [
        "Definitely Agree",
        "Slightly Agree",
        "Slightly Disagree",
        "Definitely Disagree",
      ],
    },
    {
      id: 3,
      text: "3. If I try to imagine something, I find it very easy to create a picture in my mind.",
      options: [
        "Definitely Agree",
        "Slightly Agree",
        "Slightly Disagree",
        "Definitely Disagree",
      ],
    },
    {
      id: 4,
      text: "4. I frequently get so strongly absorbed in one thing that I lose sight of other things.",
      options: [
        "Definitely Agree",
        "Slightly Agree",
        "Slightly Disagree",
        "Definitely Disagree",
      ],
    },
    {
      id: 5,
      text: "5. I often notice small sounds when others do not.",
      options: [
        "Definitely Agree",
        "Slightly Agree",
        "Slightly Disagree",
        "Definitely Disagree",
      ],
    },
    {
      id: 6,
      text: "6. I usually notice car number plates or similar strings of information.",
      options: [
        "Definitely Agree",
        "Slightly Agree",
        "Slightly Disagree",
        "Definitely Disagree",
      ],
    },
    {
      id: 7,
      text: "7. Other people frequently tell me that what I've said is impolite, even though I think it is polite.",
      options: [
        "Definitely Agree",
        "Slightly Agree",
        "Slightly Disagree",
        "Definitely Disagree",
      ],
    },
    {
      id: 8,
      text: "8. When I'm reading a story, I can easily imagine what the characters might look like.",
      options: [
        "Definitely Agree",
        "Slightly Agree",
        "Slightly Disagree",
        "Definitely Disagree",
      ],
    },
    {
      id: 9,
      text: "9. I am fascinated by dates.",
      options: [
        "Definitely Agree",
        "Slightly Agree",
        "Slightly Disagree",
        "Definitely Disagree",
      ],
    },
    {
      id: 10,
      text: "10. In a social group, I can easily keep track of several different people's conversations.",
      options: [
        "Definitely Agree",
        "Slightly Agree",
        "Slightly Disagree",
        "Definitely Disagree",
      ],
    },
  ];

  const questionsContent = questionData?.map((question) => (
    <div className="question" key={question.id}>
      <p>{question.text}</p>
      {question.options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            name={`question-${question.id}`}
            value={option}
            checked={answers[question.id] === option}
            onChange={() => handleOptionChange(question.id, option)}
          />
          {option}
        </label>
      ))}
    </div>
  ));

  return (
    <div className="container">
      <div className="header-section">
        <Navbar />
        <div className="title-container">
          {/* Conditional rendering to ensure questionnaire is not null */}
          {questionnaire && (
            <h1 className="page-title">{questionnaire.name}</h1>
          )}
        </div>
      </div>
      <div className="styling-image-1"></div>
      <div className="questionnaire-section">
        <div className="styling-image-2"></div>
        {renderInfoBox("Basic Information", basicInfoContent)}
        {renderInfoBox("Instruction", instructionContent)}
        {renderInfoBox("Scoring", scoringContent)}
        <button className="button">
          To gain access please have your first session with Doro
        </button>
        <button className="start-button">START YOUR FIRST SESSION</button>
        <div
          className="take-test-card"
          style={{ "--dynamic-title": `"${title}"` }}
        >
          <p className="question">{questionsContent}</p>
        </div>
        <button className="start-button">SUBMIT</button>
      </div>
      <Footer />
    </div>
  );
};

export default QuestionnairePage;
