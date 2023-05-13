import {  Container, Row, Col } from "../../utilis/Bootstrap.js";

export default function Header() {
  return (
    <main>
      <Container className="mb-4">
        <Row>
          <Col md={10}>
            <p className="site-intro">My editorial experience runs the gamut from photographic, award-winning nonfiction to highly commercial, older YA and everything in between. This is a sample of the published books and projects I have recently worked on as a freelance editor (click on a book jacket to learn more).</p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
