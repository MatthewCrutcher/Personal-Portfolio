import React, { useState } from "react";
//CSS
import "./Projects.css";
//IMAGES
import BibleSpeakN from "../images/BibleSpeakN.png";
import BibleSpeakA from "../images/BibleSpeakA.png";
import MajorChocolateN from "../images/MajorChocolateN.png";
import MajorChocolateA from "../images/MajorChocolateA.png";

//
function Projects() {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);

  return (
    <div className="project-container">
      <h1>Projects</h1>
      <div className="bibleSpeak-container">
        <img
          className="bibleSpeak-project"
          src={active ? BibleSpeakA : BibleSpeakN}
          alt="BibleSpeak Project Link"
          onClick={() => window.open("https://bible-speak.herokuapp.com/")}
          onMouseOver={() => setActive(!active)}
          onMouseLeave={() => setActive(false)}
        />
        <ul>
          <li>React.js</li>
          <li>CSS - Flexbox</li>
          <li>CRUD Requests</li>
          <li>Forms & Form Validation</li>
          <li>Persisting Data</li>
          <li>React Hooks</li>
        </ul>
      </div>
      <div className="majorChocolate-container">
        <img
          className="majorChocolate-project"
          src={active2 ? MajorChocolateA : MajorChocolateN}
          alt="MajorChocolate Project Link"
          onClick={() => window.open("https://major-chocolate.herokuapp.com/")}
          onMouseOver={() => setActive2(!active2)}
          onMouseLeave={() => setActive2(false)}
        />
        <ul>
          <li>React.js</li>
          <li>CSS - Flexbox, Grid</li>
          <li>API Call</li>
          <li>Redux Toolkit</li>
          <li>React Hooks</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
