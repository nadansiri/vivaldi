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
import { logoutTeacher, authedTeacher } from "../Redux/actions/teacherActions";
import { Link } from "react-router-dom";
import EmailIcon from '@material-ui/icons/Email';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ActivitiesForTeacherDashboard from "../components/ActivitiesForTeacherDashboard";

const TeacherDashbord = () => {
  const teacher = useSelector((state) => state.teacherReducer.teacher); //mapStateToProps
  const dispatch = useDispatch();
  
  return (
    <div id="dashboard">
      <Container >
        <Row>
          <Col sm={4}>
            <Card  style={{ width: "100%" }}>
              <Card.Img
                roundedCircle
                variant="top"
                src={teacher.avatarUrl}
                alt="profile photo"
              />
              <Card.Body>
                <Card.Title className="ContactDetails">
                  {teacher.firstName} {teacher.lastName}
                </Card.Title>
                <Card.Text className="CardText">
                  <p>I am not a teacher, but an awakener.</p>
                  <cite title="Source Title">– Robert Frost</cite>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem className="ContactDetails">
                  <b>First Name:</b> {teacher.firstName}
                </ListGroupItem>
                <ListGroupItem className="ContactDetails">
                  <b>Last Name:</b> {teacher.lastName}
                </ListGroupItem>
                <ListGroupItem className="ContactDetails">
                <EmailIcon color="disabled" />
                  <b> Email:</b> {teacher.email}
                </ListGroupItem>
                <ListGroupItem className="ContactDetails">
                <SupervisedUserCircleIcon color="disabled" />
                  <b> Supervises :</b> {teacher.club}
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Button variant="secondary" style={{ width: "200px" }}>
                  <Link
                    to="/teacherlogin"
                    onClick={() => dispatch(logoutTeacher())}
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
              Welcome "{teacher.firstName} {teacher.lastName}"!
            </h1>

            {teacher.role === "ADMIN" ? (
              <div>
                <h4>You are logged in as ADMIN.</h4>
              </div>
            ) : null}
            <hr />
            {!teacher.club? <p style={{color:"white"}}>Please contact the admin to confirm your account!</p>:null}
            <h1>{teacher.club}</h1>
            <hr />
            </div>
            <ActivitiesForTeacherDashboard firstName={teacher.firstName}
            lastName={teacher.lastName}
            posterId={teacher._id}
            role={teacher.role}
            club={teacher.club}/>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default TeacherDashbord;
