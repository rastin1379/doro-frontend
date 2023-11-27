import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { selectIsLoggedIn } from "../../store/slices/authSlice";
import {
  missionStyles,
  missionTitleStyles,
  missionContentStyles,
  missionButton,
} from "../../styles/Mission";

function Mission() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div style={missionStyles}>
      <h2 style={missionTitleStyles}>Our Mission</h2>
      <p style={missionContentStyles}>
        Doro is engineered for early mental disorder intervention. Through
        ongoing sessions, reliable questionnaires, and diligent state tracking,
        it aspires to facilitate early intervention, aiding in the prevention of
        full disorder manifestation or relapse. Doro's structured approach
        fosters a proactive stance on mental health, aiming to mitigate
        potential adversities before they escalate.
      </p>
      <Button
        style={{ ...missionButton, textTransform: "none" }}
        component={Link}
        to={isLoggedIn ? "/doro-test-start" : "/get-started"}
      >
        Doro Session
      </Button>
    </div>
  );
}

export default Mission;
