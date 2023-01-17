import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillWechat, 
} from "react-icons/ai";
import {
  RiBilibiliFill, 
} from "react-icons/ri";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "3em" }}>
              WHO AM <span className="purple"> I </span> 
            </h1>
            <p className="home-about-body">
              I love video games, not only for the entertainment they offer but also because of my passions for art and narrative.
              <br />
              <br />I have worked on many game projects from long-term projects to game jams.
              <br />
              <br />
              My field of Interest includes&nbsp;
              <i>
                <b className="purple">Graphic Design</b> ,
                <b className="purple">Game Design 
                </b> and{" "}
                <b className="purple">Photography.
                </b>
              </i>
              <br />
              <br />
              These experiences inspired me to pursue a career in the video game industry and to eventually create my own game.
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
                  href="https://github.com/DavidLiu2021"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mp.weixin.qq.com/s/-vmkbHiqK2b0I1djuVJWdQ"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillWechat />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://space.bilibili.com/448831214?spm_id_from=333.1007.0.0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <RiBilibiliFill />
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
