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
        Doro is our first product. It is a system for early psychological
        intervention. Mental disorders manifest as a result of a combination of
        our susceptibilities and environmental factors. By recognizing our
        psychological vulnerabilities through Doro, we can act earlier to
        prevent severe mental conditions.
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
