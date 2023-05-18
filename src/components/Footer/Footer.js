import { Container, Row, Col, Image } from "../../utilis/Bootstrap.jsx";

export default function Footer() {
    const imgUri = process.env.PUBLIC_URL;

    return (
      <footer>
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={11}>
              <Image src={`${imgUri}/images/site/edited-by-catherine.png`} 
                alt="Edited by Catherine"
                style={{width: "270px",height: "150px"}} />
                  <p className="mt-4"><small>&copy; 2011-2023 Catherine Frank Editorial Services, LLC
                    <br />
                  <a href="mailto:catherine@editedbycatherine">catherine@editedbycatherine.com</a></small></p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
}
