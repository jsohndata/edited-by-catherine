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
            <div className="custom-intro">
              <h1>Writing is a solitary endeavor.</h1> 
              <h2>Becoming a published author takes a team.</h2> 
            </div>
                       
            <p>Do you have the seed of an idea for a children's book? Are you wondering what the next step is for your manuscript? Does your story need a big picture edit or polish to be ready for submission? Catherine Frank Editorial Services, LLC specializes in children’s writing and publishing and offers personalized editorial expertise.</p>
            <HashLink to="/#services"><Button size="lg" variant="outline-success" className="custom-button">View Services</Button></HashLink>
          </Col>          
        </Row>
      </Container>
    </main>
  );
}


