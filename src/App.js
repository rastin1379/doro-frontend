import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/mainpage/MainPage";
import ResourcesPage from './components/resources/ResourcesPage'
import StartSection from './components/getstarted/getStartedPage'
// ... other imports

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/resources" element={<ResourcesPage />} />{" "}
          <Route path="/get-started" element={<StartSection />} />{" "}
          {/* Other routes can be added here later */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
