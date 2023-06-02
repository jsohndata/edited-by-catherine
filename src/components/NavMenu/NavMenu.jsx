import {  Container, Navbar, Nav, Image } from "../../utils/Bootstrap.jsx";


export default function NavMenu() {

  const rootUri = process.env.PUBLIC_URL;

  return (
        <Navbar fixed="top" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand>
              <Nav.Link href="#root"><Image src={`${rootUri}/images/site/edited-by-catherine-mobile.png`} 
                alt="Edited By Catherine - Editorial Service" /></Nav.Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              <Nav className="me-auto">
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>                
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#faq">Faq</Nav.Link>
                <Nav.Link href="mailto:catherine@editedbycatherine.com">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

