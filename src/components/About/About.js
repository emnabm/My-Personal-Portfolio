import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <div id="skills">
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <Techstack />
        </div>
      </Container>
    </Container>
  );
}

export default About;
