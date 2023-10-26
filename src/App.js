import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Mission from './components/Mission'
import Questionnaires from './components/Questionnaires';
// ... other imports

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Features />
      <Mission />
      <Questionnaires />
      {/* Add the other components here */}
    </div>
  );
}

export default App;
