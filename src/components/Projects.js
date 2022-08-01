import React, { useState } from "react";
//CSS
import "./Projects.css";
//IMAGES
import ProjectPlaceholder from "../images/ProjectPlaceholder.png";
//
function Projects() {
  const [active, setActive] = useState(false);

  return (
    <div className="project-container">
      <h1>Projects</h1>
      <div className="bibleSpeak-container">
        <img
          className="bibleSpeak-project"
          src={ProjectPlaceholder}
          alt="BibleSpeak Project Link"
          onClick={() => window.open("https://bible-speak.herokuapp.com/")}
          onMouseOver={() => setActive(!active)}
          onMouseLeave={() => setActive(false)}
        />
        {active ? <h1>This is an app for christains</h1> : null}
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
          src={ProjectPlaceholder}
          alt="MajorChocolate Project Link"
          onClick={() => window.open("https://major-chocolate.herokuapp.com/")}
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
