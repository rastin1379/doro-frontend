import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "../../styles/ProfileBeforeSession.css";
import avatar from "../../assets/icons/avatar.svg";

function ProfileBeforeSession() {
  return (
    <>
      <div className="profile-before-session">
        <Navbar />

        <div className="profile-section">
          <div className="user-info">
            <img src={avatar} alt="User Avatar" className="user-avatar" />
            <h1>Rastin Rassoli</h1>
            <p>Last Session with Doro</p>
          </div>

          <div className="session-button-box">
            <button className="session-button">START YOUR FIRST SESSION</button>
          </div>

          <div className="test-results-container">
            <h2>All Test Results</h2>
            <div className="test-results">
              <button className="session-button">
                TAKE MENTAL HEALTH QUESTIONNAIRES
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfileBeforeSession;
