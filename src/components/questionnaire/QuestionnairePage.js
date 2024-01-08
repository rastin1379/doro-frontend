import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ReactMarkdown from "react-markdown";
import "../../styles/QuestionnairePage.css";

const fetchQuestionnaireData = async (id) => {
  console.log("FIRST")
  const { data } = await axios.get(`/ptests/${id}/info`);
  return data;
};

const fetchQuestions = async (id) => {
  console.log("SECOND");
  const { data } = await axios.get(`/ptests/${id}/questions`);
  return data;
};

const QuestionnairePage = () => {
  const { title, id } = useParams();
  const [answers, setAnswers] = useState({});
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    data: questionnaire,
    error,
    isError,
    isLoading,
  } = useQuery(["questionnaire", id], () => fetchQuestionnaireData(id), {
    staleTime: Infinity,
    cacheTime: 0,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const fetchAdditionalInfo = useCallback(async () => {
    if (questionnaire) {
      try {
        const questions = await fetchQuestions(id);
        setQuestions(questions);
      } catch (error) {
        console.error("Error fetching additional data:", error);
      }
    }
  }, [questionnaire, id]);

  useEffect(() => {
    fetchAdditionalInfo();
  }, [fetchAdditionalInfo]);

  // Handle loading state
  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  // Handle error state
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

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
