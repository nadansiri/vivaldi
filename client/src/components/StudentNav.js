import { Nav, Navbar, NavDropdown, Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutStudent } from "../Redux/actions/studentActions";

const TeacherNav = () => {
  const dispatch = useDispatch();
  return (
    <div className="MyNavbar TeacherNav">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="flex-column">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/authstudent">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/myprojects">
                My Projects
              </Nav.Link>

              <NavDropdown title="My Space" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/publicforum">
                  Public Forum
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/clubforum">
                  My Club Forum
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Link
                to="/studentlogin"
                onClick={() => dispatch(logoutStudent())}
                style={{ color: "white" }}
              >
                log out
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/*<Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
      */}
    </div>
  );
};

export default TeacherNav;
