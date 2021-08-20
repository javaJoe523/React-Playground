import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";

const Navigation = () => (
  <Navbar variant="dark" expand="sm">
    <Container>
      <Navbar.Brand href="#home">Micah Loftin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Blog</Nav.Link>
          <NavDropdown title="Projects" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              DiscordBot (Python)
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              RustBucket (Rust)
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Button variant="primary">Contact</Button>
    </Container>
  </Navbar>
);

export default Navigation;
