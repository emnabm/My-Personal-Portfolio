import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8} className="home-about-description">
            <h1 style={{ fontSize: "2.4em" }}>
              About <span className="purple">Me</span>
            </h1>
            <p className="home-about-body" style={{ textAlign: "center" }}>
              I'm a final-year{" "}
              <b className="purple">
                Software Engineering student at ISSAT Sousse, Tunisia
              </b>
              , passionate about building intelligent software that solves
              real-world problems. With a strong foundation in{" "}
              <b className="purple">
                software engineering, backend development, and system design
              </b>
              , I'm currently expanding my expertise into{" "}
              <b className="purple">
                AI, Machine Learning, and LLM-powered
                applications&nbsp;
              </b>
              with a perticular interest in{" "}
              <b className="purple">Retrieval-Augmented Generation (RAG)</b> and intelligent systems.
              <br />
              <br />
              I'm constantly learning, experimenting, and building projects
              that bridge the gap between{" "}
              <b className="purple">AI and real-world software</b>, with the
              goal of growing into an engineer who can develop both robust
              systems and intelligent applications.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;