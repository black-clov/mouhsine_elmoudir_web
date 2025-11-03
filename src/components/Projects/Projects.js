import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Web development-related images
const reactAppImg = "https://cdn.dribbble.com/users/1187278/screenshots/16441119/media/5e5f9e1798f256dcb2b32d84ee7214de.png";
const threejsNavImg = "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*xzAkpXY3yR9ZbiKKnXh2kg.png";
const selfOrderImg = "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_w1y4mQWfP5IvxOOVN0AsA.png";
const dashboardImg = "https://cdn.analyticsvidhya.com/wp-content/uploads/2020/05/tableau-vs-power-bi.png";
const secureAppImg = "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*u21yDyHcYccVLoG2OS4-YA.png";
const formationImg = "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Eoeb9QKXH6BFL7MtX8CeJg.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Web Development Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          A selection of modern web apps I’ve built — combining frontend design, backend integration, and real-time interactivity.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Secure Financial Risk App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={secureAppImg}
              isBlog={false}
              title="Secure Financial Risk App"
              description="Developed a full-stack web solution to visualize and manage financial risks with React.js, Node.js, and REST APIs — implementing secure data handling and responsive design."
              ghLink="https://github.com/mouhsineelmoudir"
            />
          </Col>

          {/* 3D Campus Navigation */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={threejsNavImg}
              isBlog={false}
              title="3D Campus Navigation Platform"
              description="Built an immersive 3D navigation web app using React.js and Three.js. Integrated Google Maps API for realistic pathfinding inside campus environments."
              ghLink="https://github.com/mouhsineelmoudir"
            />
          </Col>

          {/* Self-Ordering App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={selfOrderImg}
              isBlog={false}
              title="Self-Ordering Web App"
              description="Developed a React.js + Node.js based self-ordering system for restaurants — enabling customers to place and track orders autonomously through an intuitive UI."
              ghLink="https://github.com/mouhsineelmoudir"
            />
          </Col>

          {/* Interactive Dashboard */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboardImg}
              isBlog={false}
              title="Interactive Business Dashboard"
              description="Designed a dynamic PowerBI-inspired dashboard in React for real-time data visualization and decision-making — used at Wafa Assurance for analytics insights."
              ghLink="https://github.com/mouhsineelmoudir"
            />
          </Col>

          {/* Web Automation & Visualization */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactAppImg}
              isBlog={false}
              title="Automation & Data Visualization Web App"
              description="Created interactive web pages in JavaScript and React for mapping and geolocating insurance intermediaries, integrating APIs and business data sources."
              ghLink="https://github.com/mouhsineelmoudir"
            />
          </Col>

          {/* AI-Based Industrial Training App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={formationImg}
              isBlog={false}
              title="AI-Based Industrial Training Platform"
              description="Developed a simulation and training interface combining AI modules and web interactivity for operator learning in Industry 4.0 environments."
              ghLink="https://github.com/mouhsineelmoudir"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
