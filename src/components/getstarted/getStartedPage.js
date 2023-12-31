import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, fetchToken } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import girlChattingImg from "../../assets/girlChattingWithBot.svg";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../styles/getStartedPage.css";
import Discord from "../../assets/icons/discord.svg";
import { Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeuGlKa4ZTQhEOTlTn-MoiRKkHWd0PicE",
  authDomain: "razroze-doro.firebaseapp.com",
  projectId: "razroze-doro",
  storageBucket: "razroze-doro.appspot.com",
  messagingSenderId: "744254344766",
  appId: "1:744254344766:web:fcf729f09aaeeaeea34b6f",
  measurementId: "G-GRMF60R0YM",
};

// Initialize Firebase
initializeApp(firebaseConfig);

function StartSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackBar, setSnackBar] = useState(false);

  const handleClose = () => {
    setSnackBar(false);
  };
  const message = (
    <div style={{padding:"5px 10px"}}>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </div>
  );

  const handleRegisterClick = async (prevState) => {
    console.log("prevState=>",prevState)
    if (!email || !password) {
      setSnackBar(true);
      return;
    }

    const auth = getAuth();

    try {
      // Try to create a new account
      await createUserWithEmailAndPassword(auth, email, password);
      // Account created, user is signed in
      dispatch(login());
      dispatch(fetchToken());
      navigate("/doro-test-start");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        // If the account already exists, try to sign in
        try {
          await signInWithEmailAndPassword(auth, email, password);
          // Signed in
          dispatch(login());
          dispatch(fetchToken());
          navigate("/doro-test-start");
        } catch (signInError) {
          // Handle sign-in errors here
          alert("Error signing in: " + signInError.message);
        }
      } else {
        // Handle other errors from account creation here
        alert("Error creating account: " + error.message);
      }
    }
  };

  return (
    <div className="start-wrapper fade-in">
      <div className="start-section">
        <Navbar />
        <div className="start-content">
          <div>
            <div className="text-content-start">
              <h1 style={{ fontWeight: "900" }}>Join the Journey</h1>
              <p>
                Discover a supportive space for self-awareness and early
                intervention. Sign up to engage with Doro, access reliable
                questionnaires, and track your mental state over time.
              </p>
            </div>
            <div className="image-container">
              <img
                src={girlChattingImg}
                alt="Girl chatting with bot"
                className="chatDoro"
              />
            </div>
          </div>
          <div className="input-section">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <>
              <button className="register-button" onClick={handleRegisterClick}>
                REGISTER
              </button>
              <Snackbar
                anchorOrigin={{ vertical:"top", horizontal:"center"}}
                open={snackBar}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Please Enter Email and Password"
                action={message}
              />
            </>
            <span className="google-signin">OR CONTINUE WITH GOOGLE</span>
            {/* Implement Google Sign-In here */}
            <button className="register-button">GOOGLE</button>
            <span className="join-discord">
              Join us on Discord
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
