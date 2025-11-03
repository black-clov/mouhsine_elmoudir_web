import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLaptopCode, FaUsers, FaLightbulb } from "react-icons/fa";




const Techstack = () => {
  const sections = [
    {
      icon: <FaLaptopCode className="section-icon" />,
      title: "Développement Frontend (React.js)",
      tags: [
        "React.js",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Design Responsive",
        "Jest",
        "React Testing Library",
        "Cypress",
        "Git",
        "Webpack",
        "API REST",
      ],
    },
    {
      icon: <FaUsers className="section-icon" />,
      title: "Méthodologies Agiles & Collaboration",
      tags: [
        "Agile / SCRUM",
        "Collaboration d’équipe",
        "Communication",
        "Partage de connaissances",
        "Qualité du code",
        "Revue de code",
      ],
    },
    {
      icon: <FaLightbulb className="section-icon" />,
      title: "Qualités Personnelles",
      tags: [
        "Sens de l’écoute",
        "Esprit critique",
        "Capacité d’argumentation",
        "Créativité",
        "Sens du détail",
        "Veille technologique",
      ],
    },
  ];

  return (
    <div className="techstack-section">
      <motion.h2
        className="techstack-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Compétences
      </motion.h2>

      {sections.map((section, idx) => (
        <motion.div
          key={idx}
          className="techstack-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
        >
          <div className="techstack-header">
            {section.icon}
            <h3 className="techstack-subtitle">{section.title}</h3>
          </div>

          <Row className="justify-content-center">
            {section.tags.map((tag, i) => (
              <Col xs="auto" key={i}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Badge className="techstack-tag">{tag}</Badge>
                </motion.div>
              </Col>
            ))}
          </Row>

          {idx < sections.length - 1 && (
            <hr className="techstack-divider" aria-hidden="true" />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Techstack;
