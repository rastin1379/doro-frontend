import React from "react";
import "../styles/Footer.css";
import discordIcon from "../assets/icons/discord.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="image-background"></div>
      <div className="text-overlay">
        <h2>© 2023 Doro, Inc. All Rights Reserved.</h2>
        <h3>
          Join us on Discord
          <img
            src={discordIcon}
            alt=""
            className="info-icon"
            style={{ marginLeft: "9px"}}
          />
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
