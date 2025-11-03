import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m passionate about creating <b className="purple">modern, scalable, and interactive web applications</b> 
              that combine technology, design, and user experience.
              <br />
              <br />
              I specialize in
              <i>
                <b className="purple"> JavaScript (ES6+), React.js, Node.js, and REST APIs, </b>
              </i>
              building dynamic frontends and efficient backends.
              <br />
              <br />
              My main interests lie in
              <i>
                <b className="purple"> full-stack web development, 3D web experiences, </b> and{" "}
                <b className="purple"> data-driven applications </b>
                using technologies such as <b className="purple">Three.js, Express, and MongoDB.</b>
              </i>
              <br />
              <br />
              I enjoy designing responsive interfaces, optimizing performance, and integrating
              <b className="purple"> AI or visualization features </b> into web platforms
              — from business dashboards to immersive navigation apps.
              <br />
              <br />
              Whenever possible, I bring my ideas to life through{" "}
              <b className="purple"> creative coding, 3D graphics, </b> and{" "}
              <b className="purple"> interactive user experiences. </b>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mouhsineelmoudir"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mouhsine-el-moudir-a0842221b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.tiktok.com/@mr.unreal.things"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mr.unreal.things/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
