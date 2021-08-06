import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <div className="MyNavbar">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand className="NavTitle" as={Link} to="/"> CENTRE D'ART VIVALDI
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
              <NavDropdown title="Featured" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/clubs/club1">Music Club
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/clubs/club2">Sports Club
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/clubs/club3">Art Club
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/events">Events
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              
              <NavDropdown title="Students' Space" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/studentregister">Register
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/studentlogin">Log in
                </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Teachers' Space" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/teacherregister">Register
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/teacherlogin">Log in
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
