import React from "react";
//CSS
import "./Projects.css";
//IMAGES
import ProjectPlaceholder from "../images/ProjectPlaceholder.png";

function Projects() {
  return (
    <div className="project-container">
      <h1>Projects</h1>
      <div className="bibleSpeak-container">
        <img
          className="bibleSpeak-project"
          src={ProjectPlaceholder}
          alt="BibleSpeak Project Link"
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
        <img src={ProjectPlaceholder} alt="MajorChocolate Project Link" />
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
