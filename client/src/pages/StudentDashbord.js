import React, { useEffect } from "react";
import {
  Button,
  ListGroup,
  ListGroupItem,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutStudent } from "../Redux/actions/studentActions";
import EmailIcon from "@material-ui/icons/Email";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import ActivitiesForStudentDashboard from "../components/ActivitiesForStudentDashboard";

const StudentDashbord = () => {
  const student = useSelector((state) => state.studentReducer.student); //mapStateToProps
  const dispatch = useDispatch();
  return (
    <div id="dashboardSt">
      <Container className="ContactDetails">
        <Row>
          <Col sm={4}>
            <Card className="ContactDetails" style={{ width: "100%" }}>
              <Card.Img
                roundedCircle
                variant="top"
                src={student.avatarUrl}
                alt="profile photo"
              />
              <Card.Body>
                <Card.Title className="ContactDetails">
                  {student.firstName} {student.lastName}
                </Card.Title>
                <Card.Text className="CardText">
                  <p>
                    “The beautiful thing about learning is that no one can take
                    it away from you.”{" "}
                  </p>
                  <cite title="Source Title">– B.B. King</cite>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem className="ContactDetails">
                  <b>First Name:</b> {student.firstName}
                </ListGroupItem>
                <ListGroupItem className="ContactDetails">
                  <b>Last Name:</b> {student.lastName}
                </ListGroupItem>
                <ListGroupItem className="ContactDetails">
                  <EmailIcon color="disabled" />
                  <b> Email:</b> {student.email}
                </ListGroupItem>
                <ListGroupItem className="ContactDetails">
                  <SupervisedUserCircleIcon color="disabled" />
                  <b> A member of:</b> {student.club}
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Button variant="secondary" style={{ width: "200px" }}>
                  <Link
                    to="/studentlogin"
                    onClick={() => dispatch(logoutStudent())}
                    style={{ color: "white" }}
                  >
                    log out
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={8}>
            <div className="dashboardCol2">
              <h1>
                Welcome "{student.firstName} {student.lastName}"!
              </h1>
              <hr />
              {!student.club ? (
                <p style={{ color: "white" }}>
                  Please contact the admin to confirm your account!
                </p>
              ) : null}
              <h1>{student.club}</h1>
              <hr />
            </div>
            <ActivitiesForStudentDashboard
              firstName={student.firstName}
              lastName={student.lastName}
              posterId={student._id}
              role={student.role}
              club={student.club}
            />
            {/*<ActivitiesForstudentDashboard firstName={student.firstName}
            lastName={student.lastName}
            posterId={student._id}
            role={student.role}
  club={student.club}/>*/}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StudentDashbord;
