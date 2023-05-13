import {  Container, Row, Col } from "../../utilis/Bootstrap.js";

export default function Hero( {textTitle, textLeft, textRight} ) {
  return (
    <section id="hero">
      <Container>
        {
          !textTitle
          ? null
          : <Row className="d-flex justify-content-center">
              <Col>
                  <h2 className="text-center">{textTitle}</h2>
              </Col>
            </Row>
        }

        <Row className="d-flex justify-content-center">
          <Col lg={6}>
              {textLeft}
          </Col>

          <Col lg={6}>
              {textRight}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
