import React from "react";
//CSS
import "./Qualification.css";
//IMAGES
import CSSLogo from "../images/CSSLogo.png";

function Qualification() {
  return (
    <div className="qualification-container">
      <h1>Qualifications</h1>
      <div className="certifcate-logos-container">
        <img
          className="css-logo"
          src={CSSLogo}
          alt="FCC CSS certificate link"
          onClick={() =>
            window.open(
              "https://www.freecodecamp.org/certification/Matthew-Crutcher/responsive-web-design"
            )
          }
        />
      </div>
    </div>
  );
}

export default Qualification;
