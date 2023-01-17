import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Fall from "../../Assets/Projects/Fall.png";
import Monster from "../../Assets/Projects/Monster.png";
import PDK from "../../Assets/Projects/PDK.png";
import Raven from "../../Assets/Projects/Raven.png";
import Reflection from "../../Assets/Projects/Reflection.png";
import Reforge from "../../Assets/Projects/Reforge.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Reforge}
              isBlog={false}
              title="Reforge"
              description="China implemented family planning in the 1980s, when a family with two children would be severely punished. Nan Jiang was born as the second child of the family. He cannot stand the fact that he was the cause of the family poverty, and he did something to change......"
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Reflection}
              isBlog={false}
              title="Reflection"
              description="“As above, so below” is the theme of Reflection.
              When we control the seagull to fly, we are actually playing with playing with our imagination to have more freedom."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PDK}
              isBlog={false}
              title="People Don't Know"
              description="A man is suddenly grabbed into a train by a stranger who threatens to cure him. On this speeding train, everyone claims to be a doctor. However, he discovers that they all have incurable diseases and painful pasts."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fall}
              isBlog={false}
              title="The Fall"
              description="The Fall is a multiplayer online Cthulhu-themed micro-fear VR game adapted from Murder Mystery script. It follows the strange adventures of six people with evil intentions in an apartment building. They fall through a lift into the underground of the building. Each floor is the intentional space of one of them. They need to explore floor by floor..."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Monster}
              isBlog={false}
              title="Monster"
              description="Monster is a unity assignment completed by a team of 3. It is about how an electronic rabbit fights against with the higher class in the cyber city."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Raven}
              isBlog={false}
              title="Raven"
              description="Raven is a talented music student, but also a bipolar patient. She had to compose for a concert within 7 days, and then, she began to struggle on this..."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
