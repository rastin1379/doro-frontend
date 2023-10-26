import React from 'react';
import { questionnaireHeaderStyles, headerStyles } from '../styles/QuestionnaireStyles';
import stylingImg from '../assets/curvesStyling.svg';

const Questionnaires = () => (
  <div style={questionnaireHeaderStyles}>
    <img src={stylingImg}  alt="" />
    <h2 style={headerStyles} elevation={2}>Questionnaires</h2>
  </div>
);

export default Questionnaires;
