import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import logoImage from "../assets/logo.svg";
import "../styles/NavBar.css";

function Navbar() {
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
          style={{ marginRight: "5%" }}
          component={Link}
          to="/"
        >
          Home
        </Button>
        <Button color="inherit" style={{ marginRight: "5%" }}>
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
        <Button
          color="inherit"
          variant="outlined"
          style={{ borderRadius: "25px", marginRight: "5%" }}
          component={Link}
          to="/get-started"
        >
          Get Started
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
