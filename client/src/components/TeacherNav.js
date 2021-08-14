import { Nav, Navbar, NavDropdown, Container ,Button} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutTeacher } from "../Redux/actions/teacherActions";

const TeacherNav = () => {
  const teacher = useSelector((state) => state.teacherReducer.teacher);
  const dispatch = useDispatch();
  return (
    <div className="MyNavbar">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand className="NavTitle" as={Link} to="/"> CENTRE D'ART VIVALDI
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/publicforum">
              Public Forum
              </Nav.Link>
              <Nav.Link as={Link} to="/authteacher">
              Dashboard
              </Nav.Link>
              

              <NavDropdown title="My Space" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/authteacher">
              Dashboard
                </NavDropdown.Item>
              <NavDropdown.Divider />
                
                <NavDropdown.Item as={Link} to="/clubforum">
                  Club Forum
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/myprojects">
                  Student's Project
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/manageaccounts">
                Manage Accounts
                </NavDropdown.Item>
                {teacher.role==="ADMIN"?
                <NavDropdown.Item as={Link} to="/contactus">
                Submitted Contact Us Forms
                </NavDropdown.Item>:null}
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
