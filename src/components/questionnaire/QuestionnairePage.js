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
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const response = await axios.get(`/ptests/${id}/info`);
        setQuestionnaire(response.data);
        const questionsResponse = await axios.get(`/ptests/${id}/questions`);
        setQuestions(questionsResponse.data);
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

  const questionsContent = questions?.map((question) => (
    <div className="question" key={question.id}>
      <p>{question.question_text}</p>
      {question.answer_labels.map((option, index) => (
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
