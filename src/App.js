import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/mainpage/MainPage";
import ResourcesPage from './components/resources/ResourcesPage'
import StartSection from './components/getstarted/getStartedPage';
import DoroChat from './components/dorochat/DoroChat';
import ProfileBeforeSession from './components/profile/ProfileBeforeSession';
import QuestionnairePage from './components/questionnaire/QuestionnairePage';
import { Provider } from "react-redux";
import { store } from './store/store';

var hours = 2; 
var now = new Date().getTime();
var setupTime = localStorage.getItem('setupTime');
if (setupTime == null) {
    localStorage.setItem('setupTime', now)
} else {
    if(now-setupTime > hours*60*60*1000) {
      localStorage.removeItem('categories');
        localStorage.setItem('setupTime', now);
    }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/resources" element={<ResourcesPage />} />{" "}
            <Route path="/get-started" element={<StartSection />} />{" "}
            <Route path="/doro-test-start" element={<DoroChat />} />{" "}
            <Route path="/profile" element={<ProfileBeforeSession />} />{" "}
            <Route
              path="/questionnaire/:title/:id"
              element={<QuestionnairePage />}
            />{" "}
            {/* Other routes can be added here later */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
