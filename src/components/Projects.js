import React, { useState } from "react";
//CSS
import "./Projects.css";
//IMAGES
import BibleSpeakN from "../images/BibleSpeakN.png";
import BibleSpeakA from "../images/BibleSpeakA.png";
import MajorChocolateN from "../images/MajorChocolateN.png";
import MajorChocolateA from "../images/MajorChocolateA.png";
import ForexApp from "../images/ForexApp.png";

//
function Projects() {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);

  return (
    <div className="project-container">
      <h1>Projects</h1>
      <div className="bibleSpeak-container">
        <div className="project-button-container">
          <img
            className="bibleSpeak-project"
            src={active ? BibleSpeakA : BibleSpeakN}
            alt="BibleSpeak Project Link"
            onClick={() => window.open("https://bible-speak.herokuapp.com/")}
            onMouseOver={() => setActive(!active)}
            onMouseLeave={() => setActive(false)}
          />
          <button
            onClick={() => window.open("https://bible-speak.herokuapp.com/")}
          >
            <p>View</p>
          </button>
        </div>

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
        <div className="project-button-container">
          <img
            className="majorChocolate-project"
            src={active2 ? MajorChocolateA : MajorChocolateN}
            alt="MajorChocolate Project Link"
            onClick={() =>
              window.open("https://major-chocolate.herokuapp.com/")
            }
            onMouseOver={() => setActive2(!active2)}
            onMouseLeave={() => setActive2(false)}
          />
          <button
            onClick={() =>
              window.open("https://major-chocolate.herokuapp.com/")
            }
          >
            <p>View</p>
          </button>
        </div>
        <ul>
          <li>React.js</li>
          <li>CSS - Flexbox, Grid</li>
          <li>API Call</li>
          <li>Redux Toolkit</li>
          <li>React Hooks</li>
        </ul>
      </div>
      <div className="bibleSpeak-container">
        <div className="project-button-container">
          <img
            className="bibleSpeak-project"
            src={ForexApp}
            alt="BibleSpeak Project Link"
            onClick={() => window.open("https://bible-speak.herokuapp.com/")}
            onMouseOver={() => setActive(!active)}
            onMouseLeave={() => setActive(false)}
          />
          <button
            onClick={() => window.open("https://bible-speak.herokuapp.com/")}
          >
            <p>View</p>
          </button>
        </div>

        <ul>
          <li>React.js</li>
          <li>CSS - Flexbox</li>
          <li>Axios</li>
          <li>ReCharts</li>
          <li>React Context</li>
          <li>React Hooks</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
