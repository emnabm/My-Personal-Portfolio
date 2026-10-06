import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import pdf from "../Assets/CV_Emna_Ben_Mahmoud.pdf";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const goTo = (sectionId) => {
    updateExpanded(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <div className="d-flex align-items-center ms-auto order-md-last nav-resume-wrapper">
          <Button
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className="nav-resume-btn"
            onClick={() => updateExpanded(false)}
          >
            Resume
          </Button>
        </div>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {/* <Nav.Item>
              <Nav.Link
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  goTo("home");
                }}
              >
                Home
              </Nav.Link>
            </Nav.Item> */}

            <Nav.Item>
              <Nav.Link
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  goTo("about");
                }}
              >
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  goTo("experience");
                }}
              >
                Experience
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  goTo("skills");
                }}
              >
                Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  goTo("projects");
                }}
              >
                Projects
              </Nav.Link>
            </Nav.Item>
                  
            <Nav.Item>
              <Nav.Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  goTo("contact");
                }}
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
