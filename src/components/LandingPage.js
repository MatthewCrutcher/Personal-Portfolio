import React from "react";
//CSS
import "./LandingPage.css";
//IMAGES
import PicPlaceholder from "../images/PicPlaceholder.png";
import GitHubIcon from "../images/github-icon.png";
import LinkedInIcon from "../images/linkedin-icon.png";
import PdfIcon from "../images/pdf-icon.png";

function LandingPage() {
  return (
    <div className="landing-page-container">
      <div className="pic-title-container">
        <div className="pic-name-container">
          <img src={PicPlaceholder} alt="PicPlaceholder" />
          <div className="name-icons-container">
            <h4>Matthew Crutcher.</h4>

            <button className="resume-button">
              <img src={PdfIcon} alt="PDF Icon" />
              <h3>Resume</h3>
            </button>
          </div>
        </div>

        <div className="title-container">
          <h1>Front-end Web Developer</h1>
          <h3>-Self taught since 2020 and still going strong!</h3>
          <div className="icon-container">
            <img
              className="github-icon"
              src={GitHubIcon}
              alt="link to my github"
            />
            <img src={LinkedInIcon} alt="link to my linkedIn" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
