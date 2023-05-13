import { HashLink } from "react-router-hash-link";
import { Container, Row, Col, Button, Image } from "../../utilis/Bootstrap.js";

export default function Intro() {
  return (
    <main id="intro">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={6}>
            <h1>Writing is a solitary endeavor.</h1>
            <h2>Becoming a published author takes a team.</h2>
            <p>Do you have the seed of an idea for a children's book and want to know more about the industry? Does your critique group love your manuscript, and now you're wondering what the next step is? Does your manuscript need a big picture edit or polishing before it's ready for submission?</p>
            <HashLink to="/#portfolio"><Button size="lg" variant="outline-primary">View Portfolio</Button></HashLink>
          </Col>

          <Col md={6}>
            <Image fluid src="http://localhost:3000/edited-by-catherine/images/site/IMG_3219.jpeg" alt="" />
          </Col>  
        </Row>
      </Container>
    </main>
  );
}


