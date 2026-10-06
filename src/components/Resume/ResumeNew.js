import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/CV_Emna_Ben_Mahmoud.pdf";

function ResumeNew() {
  return (
    <div id="resume">
      <Container fluid className="resume-section">
        <h1 className="project-heading" style={{ paddingBottom: "30px" }}>
          My <strong className="purple">Resume</strong>
        </h1>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            href={pdf}
            target="_blank"
            className="nav-resume-btn"
            style={{ maxWidth: "250px" }}
          >
            Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
