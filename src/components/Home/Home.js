import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Emna from "../../Assets/emna.jpg";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col xs={12} md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> EMNA BEN MAHMOUD</strong>
              </h1>

              <div className="type-container">
                <Type />
              </div>
            </Col>

            <Col
              xs={12}
              md={5}
              style={{ paddingBottom: 20 }}
              className="home-portrait-wrap"
            >
              <img
                src={Emna}
                alt="Emna Ben Mahmoud"
                className="img-fluid home-portrait"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
