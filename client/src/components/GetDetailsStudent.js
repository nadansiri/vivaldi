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
import { allSubmittedStudentProjects, allPostsInForum } from "../Redux/actions/publicActions";
//ICONS
import EmailIcon from "@material-ui/icons/Email";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

const GetDetailsStudent = () => {
  const foundStudent = useSelector(
    (state) => state.studentReducer.foundStudent
  ); //mapStateToProps
  const dispatch = useDispatch();

  const getStudentProjects = () => dispatch(allSubmittedStudentProjects());
  const getForums = () => dispatch(allPostsInForum());

  const SubmittedStudentProjects = useSelector(
    (state) => state.publicReducer.SubmittedStudentProjects
  );
  const SubmittedPostsData = useSelector(
    (state) => state.publicReducer.SubmittedPostsData
  );
  useEffect(() => {
    getStudentProjects();
    getForums();
  }, []);

  const resultStudents = SubmittedStudentProjects.filter(
    (el) => foundStudent._id === el.posterId
  );
  const result = SubmittedPostsData.filter(
    (el) => foundStudent._id === el.posterId
  );
 

  return (
    <div className="manageList">
      <Container className="ContactDetails">
        <Row>
          <Col sm={4}>
            <Card className="ContactDetails" style={{ width: "100%" }}>
              <Card.Img
                roundedCircle
                variant="top"
                src={foundStudent.avatarUrl}
                alt="profile photo"
              />
              <ListGroup className="list-group-flush">
                <ListGroupItem className="ContactDetails">
                  <b>First Name:</b> {foundStudent.firstName}
                </ListGroupItem>
                <ListGroupItem className="ContactDetails">
                  <b>Last Name:</b> {foundStudent.lastName}
                </ListGroupItem>
                <ListGroupItem className="ContactDetails">
                  <EmailIcon color="disabled" />
                  <b> Email:</b> {foundStudent.email}
                </ListGroupItem>
                <ListGroupItem className="ContactDetails">
                  <SupervisedUserCircleIcon color="disabled" />
                  <b> A member of:</b> {foundStudent.club}
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={8}>
            <div>
            <hr />
            <h2 style={{ fontSize: "50px", color: "white" }}>List of the submitted projects:</h2>
              <hr />
              {resultStudents.map((el) => (
                <div>
                  <Card style={{ width: "100%", margin:"20px" }}>
                    <Card.Body>
                      <Card.Title>
                        <b>Assignment ID:</b> {el.activityId}
                      </Card.Title>
                      <Card.Text>
                        <h6>{el.club}</h6>
                        <hr />
                        
                        <a href={el.projectLink}>{el.projectLink}</a>
                        <h6>{el.updatedAt}</h6>
                        <hr />
                        <h5>Review: {el.review} </h5>
                        <h6>Mark: {el.mark}/100 </h6>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
            <hr />
            <h2 style={{ fontSize: "50px", color: "white" }}>List of the submitted posts:</h2>
            <hr />
            {result.map((el) => (
                <div>
                  <Card style={{ width: "100%" }}>
                    <Card.Body>
                      <Card.Title>
                        <b>Title:</b> {el.title}
                      </Card.Title>
                      <Card.Text>
                        <h5>{el.postBody}</h5>
                        <hr />
                        <h6>{el.updatedAt}</h6>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GetDetailsStudent;
