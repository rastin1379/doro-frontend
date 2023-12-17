import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import logoImage from "../assets/logo.svg";
import "../styles/NavBar.css";
import { useSelector } from "react-redux"; // Import useSelector
import { selectIsLoggedIn } from "../store/slices/authSlice";

function Navbar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  return (
    <AppBar position="static" elevation={1} className="navbar">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <img
            src={logoImage}
            alt="Doro"
            style={{ height: "50px", width: "auto" }}
          />
        </Typography>
        <Button
          color="inherit"
          sx={{
            marginRight: "5%",
            "&:hover": {
              backgroundColor: "transparent", // Remove background color
              color: "#CBD0DB", // Change text color
            },
          }}
          component={Link}
          to="/"
        >
          Home
        </Button>
        <Button
          color="inherit"
          style={{ marginRight: "5%" }}
          component={Link}
          to={isLoggedIn ? "/doro-test-start" : "/get-started"} // Add Link to DORO Test Chat
        >
          DORO Test
        </Button>
        <Button
          color="inherit"
          style={{ marginRight: "5%" }}
          component={Link}
          to="/resources"
        >
          Resources
        </Button>
        {/* Conditionally render based on isLoggedIn */}
        {isLoggedIn ? (
          <Button
            color="inherit"
            variant="outlined"
            style={{ borderRadius: "25px", marginRight: "5%" }}
            component={Link}
            to="/profile" // Link to the profile page
          >
            Profile
          </Button>
        ) : (
          <Button
            color="inherit"
            variant="outlined"
            sx={{
              borderRadius: "25px",
              marginRight: "5%",
              "&:hover, &:active": {
                backgroundColor: "transparent",
                textColor: "#728094",
              },
            }}
            component={Link}
            to="/get-started"
          >
            Get Started
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
