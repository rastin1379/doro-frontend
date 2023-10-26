import React from 'react';
import { missionStyles, missionTitleStyles, missionContentStyles, missionButton } from '../styles/Mission';

const Mission = () => (
  <div style={missionStyles}>
    <h2 style={missionTitleStyles}>Our Mission</h2>
    <p style={missionContentStyles}>
      Doro is our first product. It is a system for early psychological intervention. Mental disorders manifest as a result of 
      a combination of our susceptibilities and environmental factors. By recognizing our psychological vulnerabilities 
      through Doro, we can act earlier to prevent severe mental conditions.
    </p>
    <button style={missionButton}>Doro Session</button>
  </div>
);

export default Mission;
