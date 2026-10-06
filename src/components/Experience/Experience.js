import React from "react";
import { Container } from "react-bootstrap";
import { BsBriefcase } from "react-icons/bs";

const experiences = [
  {
    role: "Full-stack developer Intern",
    company: "Clubedge",
    location: "Remote",
    period: "Jul 2026 — Aug 2026",
    summary:
      "Designed and implemented a provider-independent Communication Layer integrating Mattermost",
    bullets: [
      "Designed domain models, service layers, and adapter pattern architectures for provider-independent communication.",
      "Integrated REST API and WebSockets for real-time messaging and channel synchronization.",
      "Extended the platform with a responsive Next.js frontend application.",
    ],
    skills: ["TypeScript", "ExpressJS", "Next.js", "Mattermost SDK", "Docker", "WebSockets"],
  },
  {
    role: "Frontend developer Intern",
    company: "Zoomy Technology & IT",
    location: "Remote",
    period: "Aug 2025",
    
    summary:
      "Built an internship and job management portal streamlining end-to-end recruitment pipelines.",
    bullets: [
      "Engineered an interactive dashboard for managing internship listings, applications, and task assignments.",
      "Implemented candidate evaluation interfaces.",
    ],
    skills: ["React.js","REST APIs"],
  },
  {
    role: "Software Engineering Intern",
    company: "Lunar TC",
    location: "Sfax , Tunisia",
    period: "Jul 2025",
    
    summary:
      "Developed a dynamic visual drag-and-drop form builder with reusable component libraries.",
    bullets: [
      "Created dynamic drag-and-drop form creation interfaces with customizable input modules.",
      "Built exportable form schema and code generator enabling instant integration into client apps.",
    ],
    skills: ["Angular", "Tailwind CSS", "TypeScript"],
  },
];

function Experience() {
  return (
    <Container fluid className="experience-section" id="experience">
      <Container>
        <div className="experience-header text-center">
          <p className="experience-subtitle">WHERE I'VE WORKED</p>
          <h1 className="experience-title">
            Experience
          </h1>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-company">
                      {exp.company}
                      {exp.location && (
                        <span className="timeline-location"> &bull; {exp.location}</span>
                      )}
                    </h4>
                  </div>
                  <div className="timeline-badge-wrap">
                    <span className="timeline-period-badge">
                      {exp.period}
                      {exp.duration && (
                        <span className="timeline-duration"> &bull; {exp.duration}</span>
                      )}
                    </span>
                  </div>
                </div>

                {exp.summary && <p className="timeline-summary">{exp.summary}</p>}

                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>

                <div className="timeline-tags">
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="timeline-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Experience;
