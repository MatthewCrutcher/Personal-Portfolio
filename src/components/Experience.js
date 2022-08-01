import React from "react";
//CSS
import "./Experience.css";

function Experience() {
  return (
    <div className="experience-container">
      <h1>Experience</h1>
      <div className="list-container">
        <ul>
          <li>React.js</li>
          <li>CSS</li>
          <li>CRUD Requests</li>
          <li>Forms & Form Validation</li>
          <li>React Hooks</li>
        </ul>
        <ul>
          <li>Redux</li>
          <li>Redux Toolkit</li>
          <li>JSON Server</li>
          <li>NPM</li>
          <li>Github</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
