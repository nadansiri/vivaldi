import React, { useState, useEffect } from "react";
import { Form, Button, ListGroup, Card, Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  allSubmittedStudentProjects,
  allActivities,
} from "../Redux/actions/publicActions";
import { Link } from "react-router-dom";

import PostStudentProject from "./PostStudentProject";

const ActivitiesForStudentDashboard = (props) => {
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("Show More");
  const handleShow = () => {
    setShow(!show);
    show ? setMsg("Show More") : setMsg("Hide");
  };

  const errors = useSelector((state) => state.publicReducer.errors);
  const dispatch = useDispatch();

  const getActivities = () => dispatch(allActivities());
  const SubmittedActivities = useSelector(
    (state) => state.publicReducer.SubmittedActivities
  );
  const getStudentProjects = () => dispatch(allSubmittedStudentProjects());
  const SubmittedStudentProjects = useSelector(
    (state) => state.publicReducer.SubmittedStudentProjects
  );
  useEffect(() => {
    getActivities();
    getStudentProjects();
  }, []);
  const result = SubmittedActivities.filter((el) => props.club === el.club);
  const res = result.length;

  const resultStudents = SubmittedStudentProjects.filter(
    (el) => props.posterId === el.posterId
  );
  const resSt = resultStudents.length;
  //Not reviewed yet
  const notReviewed = resultStudents.filter(
    (el) => el.review != "Not reviewed yet"
  );
  console.log(
    "zzzzzzz",
    resultStudents,
    "nb",
    resSt,
    "Not reviewed yet",
    notReviewed
  );
  return (
    <div>
      <div className="profileElement">
        {res > 0 ? (
          <>
            <h3>My Assignments</h3>
            <hr />
            <Card border="warning">
              <Card.Header>
                <h5>
                  <b>Title:</b> {result[res - 1].activityTitle}
                </h5>
                <h6>{result[res - 1].club}</h6>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <h6>Deadline: {result[res - 1].deadline}</h6>
                  <h6>{result[res - 1].updatedAt}</h6>
                </Card.Title>
                <hr />

                <h5>{result[res - 1].activityDescription}</h5>
              </Card.Body>
            </Card>
            <Button style={{width:"200px", margin:"10px"}} variant="warning" onClick={handleShow}>{msg}</Button>
            {show ? (
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
                      <div className="actionBtn2">
                        <PostStudentProject
                          firstName={props.firstName}
                          lastName={props.lastName}
                          posterId={props.posterId}
                          Activity={el}
                        />
                      </div>
                    </ListGroup.Item>
                  </div>
                ))}
              </ListGroup>
            ) : null}
          </>
        ) : (
          <p>You didn't post any activities yet</p>
        )}
      </div>
      <div className="profileElements">
      <Container >
        <Row>
          <Col sm={4}>
        <div className="profileElement2">
          <h3>"You have </h3>
          {res === 1 ? (
            <>
              <h1>{res}</h1>
              <h3>assignment!"</h3>
            </>
          ) : (
            <>
              <h1>{res}</h1>
              <h3>assignments!"</h3>
            </>
          )}

          {res === 0 ? (
            <Link to="/clubforum" style={{ color: "green" }}>
              You have no assignments for the moment!
            </Link>
          ) : null}
        </div>
        </Col>
        {res > 0 ? (
          <>
          <Col sm={4}>
            <div className="profileElement2">
              {resSt > 1 ? (
                <>
                  <h3>You submitted {resSt} projects.</h3>
                  <hr />
                  <Link to="/myprojects" style={{ color: "green" }}>
                    Check your projects!
                  </Link>
                </>
              ) : resSt === 1 ? (
                <>
                  <h3>You submitted {resSt} project.</h3>
                  <hr />
                  <Link to="/myprojects" style={{ color: "green" }}>
                    Check your projects!
                  </Link>
                </>
              ) : (
                <h3>You didn't submit any assignment yet.</h3>
              )}
            </div>
            </Col>
            {resSt > 0 ? (
              <Col sm={4}>
              <div className="profileElement2">
                <h3>"You have </h3>
                {notReviewed.length === 1 ? (
                  <>
                    {" "}
                    <h1>{notReviewed.length}</h1>
                    <h3>reviewed project. "</h3>
                  </>
                ) : (
                  <>
                    {" "}
                    <h1>{notReviewed.length}</h1>
                    <h3>reviewed projects. "</h3>
                  </>
                )}
              </div>
              </Col>
            ) : null}
          </>
        ) : null}
      </Row>
      </Container>
      </div>
      <hr />
    </div>
  );
};

export default ActivitiesForStudentDashboard;
