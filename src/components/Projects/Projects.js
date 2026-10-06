import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ragChatbot from "../../Assets/Projects/rag_chatbot.jpg";
import home_student from "../../Assets/Projects/home_student.PNG";
import joa from "../../Assets/Projects/joa.png";
import zoomy from "../../Assets/Projects/publications.png";
import clubedge from "../../Assets/Projects/chat.png";
import form_builder from "../../Assets/Projects/form builder.png";
function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Academic projects and internship work.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
             <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clubedge}
              isBlog={false}
              title="Communication Layer — Clubedge"
              description="Designed a provider-independent Communication Layer integrating Mattermost , with REST API and WebSocket for real-time messaging. Extended with a Next.js frontend. Technologies: TypeScript, ExpressJS, Next.js, Docker."
              ghLink="https://github.com/Clubedge/team-communication"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zoomy}
              isBlog={false}
              title="Internship Management Dashboard"
              description="Internship management dashboard for jobs/internships offers, applications, candidate evaluation, and task assignment. 
              Technologies: ReactJS."
              ghLink="https://github.com/emnabm/zoomy-project"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={home_student}
              isBlog={false}
              title="Scolar Process Management System"
              description="Backend system for managing student and teacher accounts, schedules, and course materials, with an integrated discussion forum. Built with NestJS, Prisma, PostgreSQL, and Docker."
              ghLink="https://github.com/onszayani/cursus-backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ragChatbot}
              isBlog={false}
              title="Conversational RAG Chatbot"
              description="Conversational RAG chatbot for querying private documents — document chunking, vector embeddings, ChromaDB retrieval, semantic search, conversational memory, and query contextualization with Google AI. Technologies: Python, Google AI API, ChromaDB, Sentence Transformers."
              ghLink="https://github.com/emnabm/RAG_chatbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={joa}
              isBlog={false}
              title="E-Commerce Platform"
              description="Full-stack B2C e-commerce platform with JWT authentication, RBAC, and a responsive mobile-first UI. Technologies: Symfony, Nuxt.js, MySQL."
              ghLink="https://github.com/emnabm/JOA-e-commerce"
            />
          </Col>

       

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={form_builder}
              isBlog={false}
              title="Dynamic Form Builder"
              description="Dynamic drag-and-drop form builder with reusable components and exportable form code. Technologies: Angular, Tailwind CSS."
              ghLink="https://github.com/emnabm/FormBuilder"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
