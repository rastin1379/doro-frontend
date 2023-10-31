import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectIsLoggedIn } from "../../store/slices/authSlice";
import girlChattingImg from "../../assets/girlChattingWithBot.svg";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/getStartedPage.css";
import Discord from "../../assets/icons/discord.svg";

function StartSection() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // TO DO: For now, user is logged in when they click register, later add actual AUTH login.
  const handleRegisterClick = () => {
    dispatch(login());
  };

  // This useEffect will run whenever isLoggedIn changes
  useEffect(() => {
    console.log("isLoggedIn state:", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div className="start-wrapper">
      <div className="start-section">
        <Navbar />
        <div className="start-content">
          <div className="text-content-start">
            <h1 style={{ fontWeight: "900" }}>Join the Journey</h1>
            <p>
              Discover a supportive space for self-awareness and early
              intervention. Sign up to engage with Doro, access reliable
              questionnaires, and track your mental state over time.
            </p>
          </div>
          <img src={girlChattingImg} alt="Girl chatting with bot" />
          <div className="input-section">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <button className="register-button" onClick={handleRegisterClick}>
              REGISTER
            </button>
            <span className="google-signin">OR CONTINUE WITH GOOGLE</span>
            <button className="register-button">GOOGLE</button>
            <span className="join-discord">
              Join us on Discord{" "}
              <img src={Discord} alt="Discord" className="discord-icon" />
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StartSection;
