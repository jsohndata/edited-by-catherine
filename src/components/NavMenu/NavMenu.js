import {  Container, Navbar, Nav, NavDropdown, Image } from "../../utilis/Bootstrap.js";


export default function NavMenu() {

  const rootUri = process.env.PUBLIC_URL;

  return (
        <Navbar fixed="top" expand="lg">
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
              
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Action
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.3">
                    Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

