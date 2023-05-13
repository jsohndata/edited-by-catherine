import { Container, Row, Col, Image } from "../../utilis/Bootstrap.js";

export default function About() {

  return(
    <Container id="about">
      <Row>
        <Col><h2>About Me</h2></Col>
      </Row>

      <Row className="justify-content-start">
        <Col md={8}>          
          <p>My editorial experience runs the gamut from photographic, award-winning nonfiction to highly commercial, older YA and everything in between. This is a sample of the published books and projects I have recently worked on as a freelance editor (click on a book jacket to learn more).</p>
          <p>I started my publishing career as an editorial assistant at Viking Children’s Books, a division of what is now Penguin Random House, just two weeks out of college. I spent more than a decade at Viking, rising through the ranks to become Executive Editor. After eleven years working in Manhattan, the time was right to return home to New Orleans with my family. I established Catherine Frank Editorial Services in the spring of 2011 with the goal of continuing to do the work that I love. </p>
          <p>As the editor of award-winning fiction and nonfiction children's books ranging in format from board books to novelties and picture books to young adult fiction, I have a broad editorial perspective. Books acquired and edited by me have received honors including: nomination for the National Book Award; The <em>Boston Globe</em> Horn Book Award, the Golden Kite Award, the Charlotte Zolotow Award, the <em>New York Times</em> Best Illustrated Award, the Jane Addams Children's Book Award, and the <em>Los Angeles Times</em> Book Prize.</p>
          <p>Through Catherine Frank Editorial Services I actively work with authors, agents, packagers, app developers, and publishers large and small. I edit picture book texts, chapter books, nonfiction books for older readers, and middle grade and YA novels. I’m a member of the SCBWI and the Women’s National Book Association.</p>
          <p>In conjunction with my freelance editorial work, in the spring of 2020 I joined Peachtree Publishing as an editor at large, acquiring and editing a limited number of manuscripts. For more information, please visit <a href="https://www.peachtree-online.com" target="_blank">www.peachtree-online.com</a>.</p>
        </Col>

        <Col md={4}>
          <Image fluid src="http://localhost:3000/edited-by-catherine/images/site/about.jpg" alt="" style={{"width": "100%"}} />
        </Col>
      </Row>
    </Container>
  )
}