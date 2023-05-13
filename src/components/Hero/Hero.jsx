import {  Container, Row, Col } from "../../utilis/Bootstrap.js";

export default function Hero() {
  return (
    <section id="hero">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col lg={6}>
              <p><strong>Catherine Frank Editorial Services, LLC</strong>, can offer guidance, editorial feedback, and serve as a general liaison between you and the sometimes confusing world of children's publishing. I can help you turn the dream of "just wanting to be published" into a reality.</p>
          </Col>

          <Col lg={6}>
              <p>With twenty years of experience in children's publishing—more than a decade in the trenches at a Big Five trade imprint and almost as long as a freelance editor—I know the ins and outs of how to craft a query letter, how to find the right agent, and, most importantly, how to develop a manuscript and help a writer create the best possible version of a story.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
