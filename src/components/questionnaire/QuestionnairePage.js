import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/QuestionnairePage.css";

const QuestionnairePage = () => {
  const { title } = useParams();
  const [answers, setAnswers] = useState({});

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

  const basicInfoContent = (
    <>
      <p>
        Statements:<strong> 50 </strong>
      </p>
      <p>
        Duration:<strong> 5-10 minutes </strong>
      </p>
      <p>
        Authors:<strong> Simon Baron-Cohen </strong>
      </p>
      <p>
        Description:
        <strong>
          {" "}
          The National Stressful Events Survey Acute Stress Disorder Short Scale
          (NSESSS) is a 7-item measure that assesses the severity of symptoms of
          acute stress disorder in individuals aged 18 and older following an
          extremely stressful event or experience.
        </strong>
      </p>
      <p>
        Reference:
        <strong>
          {" "}
          The Autism-Spectrum Quotient (AQ): Evidence from Asperger
          Syndrome/High-Functioning Autism, Males and Females, Scientists and
          Mathematicians (Baron-Cohen et al., 2001)
        </strong>
      </p>
    </>
  );

  const instructionContent = (
    <>
      <p>
        The AQ consists of 50 statements, giving you 4 choices for each
        statement:
      </p>
      <p>
        <ol>
          <li>Definitely agree</li>
          <li>Slightly agree</li>
          <li>Slightly disagree</li>
          <li>Definitely disagree</li>
        </ol>
      </p>
      <p>
        Note: it makes no difference to your score whether you choose slightly
        or definitely, so treat the statements as a binary choice agree and
        disagree.
      </p>
      <p>
        If you decide to take the test, please consider the information under
        the sections titled Outdated and Updated below.
      </p>
    </>
  );

  const scoringContent = (
    <p>
      <ul>
        <li>Scoring range: 0–50</li>
        <li>Threshold score: 26↑</li>
        <li>Scores 26 or greater indicate you might be autistic</li>
        <li>Lower scores mean you likely are not</li>
        <li>79.3% of autistic people score 32 or higher</li>
        <li>Most non-autistic males score 17 on average</li>
        <li>Most non-autistic females score 15 on average</li>
      </ul>
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


  const questionsContent = questionData.map((question) => (
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
          <h1 className="page-title">{title} Autism Spectrum Quotient</h1>
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
