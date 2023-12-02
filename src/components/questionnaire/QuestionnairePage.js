import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer"
import "../../styles/QuestionnairePage.css";

const QuestionnairePage = () => {
  const { title } = useParams();

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
        Reference: 
        <strong> The Autism-Spectrum Quotient (AQ): Evidence from Asperger
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

  return (
    <div className="container">
      <div className="header-section">
        <Navbar />
        <div className="title-container">
          <h1 className="page-title">{title}</h1>
        </div>
      </div>
      <div className="questionnaire-section">
        {renderInfoBox("Basic Information", basicInfoContent)}
        {renderInfoBox("Instruction", instructionContent)}
        {renderInfoBox("Scoring", scoringContent)}
        <button className="button">
          To gain access please have your first session with Doro
        </button>
        <button className="session-button">START YOUR FIRST SESSION</button>
      </div>
      <Footer />
    </div>
  );
};

export default QuestionnairePage;
