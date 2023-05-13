import { Container, Row, Col, Image } from "../../utilis/Bootstrap.js";

export default function Footer() {
    

    return (
      <footer>
        <Container className="mt-5 mb-5">
          <Row className="justify-content-center text-center">
            <Col md={6}>                  
                  <p><small>&copy; 2011-2023 Catherine Frank Editorial Services, LLC
                    <br />
                  <a href="mailto:catherine@editedbycatherine">catherine@editedbycatherine.com</a></small></p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
}
