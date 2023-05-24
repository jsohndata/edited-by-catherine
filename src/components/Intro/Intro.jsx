import { HashLink } from "react-router-hash-link";
import { Container, Row, Col, Button } from "../../utilis/Bootstrap.jsx";

export default function Intro() {  

  return (
    <main id="intro">
      <Container className="my-2 my-md-3 my-lg-4">
        <Row className="d-flex 
          justify-content-center
          justify-content-lg-start
          align-items-center">
          <Col xs={11} lg={8} xl={7} className="content">            
            <h1>Becoming a published author takes a team.</h1>
            <h2>Writing is a solitary endeavor.</h2>
            <p>Do you have the seed of an idea for a children's book and want to know more about the industry? Does your critique group love your manuscript, and now you're wondering what the next step is? Does your manuscript need a big picture edit or polishing before it's ready for submission?</p>
            <HashLink to="/#portfolio"><Button size="lg" variant="outline-success" className="custom-button">View Portfolio</Button></HashLink>
          </Col>          
        </Row>
      </Container>
    </main>
  );
}


