import { Container, Row, Col } from "../../utilis/Bootstrap.js";
import Card from "./Panel.js";
import data from '../../data/data.json'; 
import "../../styles/gallery.scss";

export default function Gallery() {

  return (
    <section id="portfolio">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col>
            <h2>Portfolio</h2>
            <p>My editorial experience runs the gamut from photographic, award-winning nonfiction to highly commercial, older YA and everything in between. This is a sample of the published books and projects I have recently worked on as a freelance editor (click on a book jacket to learn more).</p>
          </Col>
        </Row>
      
        <Row className="d-flex justify-content-center g-5">
            {data.map( (element) => {
              return !element 
              ? (<p>Loading</p>)
              : (<Card 
                  key={element.id}
                  data={element} />)
            })}
        </Row>
      </Container>
    </section>
  )
}
