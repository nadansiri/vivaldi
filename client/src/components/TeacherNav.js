import { Nav, Navbar, NavDropdown, Container ,Button} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutTeacher } from "../Redux/actions/teacherActions";

const TeacherNav = () => {
  const dispatch = useDispatch();
  return (
    <div className="MyNavbar TeacherNav">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/authteacher">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/manageaccounts">
                Manage Accounts
              </Nav.Link>

              <NavDropdown title="Students' Space" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/publicforum">
                  Public Forum
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/clubforum">
                  Club Forum
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/myprojects">
                  Student's Project
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
                <Link
                  to="/teacherlogin"
                  onClick={() => dispatch(logoutTeacher())}
                  style={{ color: "white" }}
                >
                  log out
                </Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TeacherNav;
