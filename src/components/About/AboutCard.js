import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">David Liu </span>
            from <span className="purple"> China</span>
            <br />I am a student from Chinese University of Hong Kong
            <br />
            <br />
            My game-related experiences have inspired me to pursue a career 
            <br /> in the video game industry and to eventually become a game producer
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> C++, Python, R, Javascript
            </li>
            <li className="about-activity">
              <ImPointRight /> Unreal, Unity, Blender
            </li>
            <li className="about-activity">
              <ImPointRight /> Photoshop, Illustrator, Procreate
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
