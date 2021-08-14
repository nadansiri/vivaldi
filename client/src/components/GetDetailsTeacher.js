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
import { allActivities, allPostsInForum } from "../Redux/actions/publicActions";
//ICONS
import EmailIcon from "@material-ui/icons/Email";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

const GetDetailsTeacher = () => {
  const foundTeacher = useSelector(
    (state) => state.teacherReducer.foundTeacher
  ); //mapStateToProps
  const dispatch = useDispatch();

  const getActivities = () => dispatch(allActivities());
  const getForums = () => dispatch(allPostsInForum());

  const SubmittedActivities = useSelector(
    (state) => state.publicReducer.SubmittedActivities
  );

  const SubmittedPostsData = useSelector(
    (state) => state.publicReducer.SubmittedPostsData
  );
  useEffect(() => {
    getActivities();
    getForums();
  }, []);
  const result = SubmittedActivities.filter(
    (el) => foundTeacher._id === el.posterId
  );
  const resultPosts = SubmittedPostsData.filter(
    (el) => foundTeacher._id === el.posterId
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
                src={foundTeacher.avatarUrl}
                alt="profile photo"
              />
              <ListGroup className="list-group-flush">
                <ListGroupItem className="ContactDetails">
                  <b>First Name:</b> {foundTeacher.firstName}
                </ListGroupItem>
                <ListGroupItem className="ContactDetails">
                  <b>Last Name:</b> {foundTeacher.lastName}
                </ListGroupItem>
                <ListGroupItem className="ContactDetails">
                  <EmailIcon color="disabled" />
                  <b> Email:</b> {foundTeacher.email}
                </ListGroupItem>
                <ListGroupItem className="ContactDetails">
                  <SupervisedUserCircleIcon color="disabled" />
                  <b> Supervises:</b> {foundTeacher.club}
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col sm={8}>
            <div>
            <hr />
            <h2 style={{ fontSize: "50px", color: "white" }}>List of the submitted activities:</h2>
              <hr />
              <ListGroup>
                <hr />
                {result.map((el) => (
                  <div>
                    <ListGroup.Item key={el._id} className="SingleForm">
                      <h5>
                        <b>Title:</b> {el.activityTitle}
                      </h5>
                      <h6>{el.club}</h6>
                      <hr />

                      <h5>{el.activityDescription}</h5>
                      <h6>Deadline: {el.deadline}</h6>
                      <h6>{el.updatedAt}</h6>
                      
                    </ListGroup.Item>
                  </div>
                ))}
              </ListGroup>
            </div>
            <hr />
            <h2 style={{ fontSize: "50px", color: "white" }}>List of the submitted posts:</h2>
            <hr />
            {resultPosts.map((el) => (
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

export default GetDetailsTeacher;
