import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/mainpage/MainPage";
import ResourcesPage from './components/resources/ResourcesPage'
import StartSection from './components/getstarted/getStartedPage'
import DoroChat from './components/dorochat/DoroChat';
import { Provider } from "react-redux";
import { store } from './store/store';

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
            {/* Other routes can be added here later */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
