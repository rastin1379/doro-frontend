import React from 'react';
import { questionnaireHeaderStyles, headerStyles, doroContainerStyles } from '../styles/QuestionnaireStyles';
import stylingImg from '../assets/curvesStyling.svg';
import DoroCard from './DoroCard'

const Questionnaires = () => {
  const cardsData = [
      { title: 'GAD-7', description: 'Measures anxiety severity to help detect generalized anxiety disorder', questions: '10 Questions', time: '10 min' },
      { title: 'PHQ-9', description: 'Assesses depression severity to aid in identifying and diagnosing depressive disorders', questions: '10 Questions', time: '10 min' },
      { title: 'BDI-II', description: 'Evaluates the severity of depression in individuals, aiding in diagnosis', questions: '10 Questions', time: '10 min' },
      { title: 'STAI', description: 'Assesses anxiety levels distinguishing between state and trait anxiety', questions: '10 Questions', time: '10 min' },
      { title: 'ASRS', description: 'Helps in identifying ADHD in adults with attention-related concerns', questions: '10 Questions', time: '10 min' },
      { title: 'OCI-R', description: 'Measures symptoms of Obsessive-Compulsive Disorder for diagnosis aid', questions: '10 Questions', time: '10 min' },
      { title: 'PSS', description: 'Evaluates perceived stress to understand coping with life demands', questions: '10 Questions', time: '10 min' },
      { title: 'IES-R', description: 'Assesses subjective distress caused by traumatic events', questions: '10 Questions', time: '10 min' },
  ];

  return (
    <div>
      <div style={questionnaireHeaderStyles}>
        <img src={stylingImg}  alt="" />
        <h2 style={headerStyles} elevation={2}>Questionnaires</h2>
      </div>
      <div className="doro-container" style={doroContainerStyles}>
          {cardsData.map((card, index) => (
              <DoroCard key={index} title={card.title} description={card.description} questions={card.questions} time={card.time} />
          ))}
      </div>
    </div>
  );
}

export default Questionnaires;
