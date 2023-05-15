import {  Container, Row, Col } from "../../utilis/Bootstrap.js";
import Column from "./Column.jsx";

export default function Banner( {textTitle, textLeft, textRight} ) {
  return (
    <section id="banner">
      <Container>
        {
          !textTitle
          ? null
          : <Row className="d-flex justify-content-center">
              <Col xs={10}>
                <h2 className="text-center py-4">{textTitle}</h2>
              </Col>
            </Row>
        }

        <Row className="d-flex justify-content-center g-5">
          {
            (textLeft && textRight)
            ? ( <><Column text={textLeft} /><Column text={textRight} /></> )
            : ( <Column text={textLeft} />)
          }
        </Row>
      </Container>
    </section>
  );
}
