import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I’m <span className="purple">Emna Ben Mahmoud</span>, a
            Software Engineering student at{" "}
            <span className="purple">ISSAT Sousse, Tunisia</span>.
            <br />
            <br />
            I specialize in backend architecture, system integration, and
            full-stack web development. I’m also building foundations in AI and
            LLM-based applications.
            <br />
            <br />
            I’m currently seeking an{" "}
            <span className="purple">end-of-studies internship</span> starting
            in February/March 2027.
            <br />
            <br />
            Outside of coding, I stay active through:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Microsoft Club ISSATSo — HR Lead
            </li>
            <li className="about-activity">
              <ImPointRight /> Student communities & tech events
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI and data-driven apps
            </li>
          </ul>

          <p style={{ color: "rgb(201, 181, 156)" }}>
            "Build practical solutions that deliver real value."
          </p>
          <footer className="blockquote-footer">Emna</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
