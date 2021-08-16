import React, { useState, useEffect } from "react";
import { Form, Button, ListGroup, Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { submitActivity, allActivities } from "../Redux/actions/publicActions";

import MyClubActivityDelete from "./MyClubActivityDelete";
import MyClubActivityEdit from "./MyClubActivityEdit";
import PostStudentProject from "./PostStudentProject";

const PostActivity = (props) => {
  const [activity, setActivity] = useState({
    posterFirstName: props.firstName,
    posterLastName: props.lastName,
    posterId: props.posterId,
    club: props.club,
  });

  const handleChange = (e) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const errors = useSelector((state) => state.publicReducer.errors);
  const dispatch = useDispatch();

  const getActivities = () => dispatch(allActivities());
  const SubmittedActivities = useSelector(
    (state) => state.publicReducer.SubmittedActivities
  );
  useEffect(() => {
    getActivities();
  }, []);

  return (
    <div className="PublicForum">
      <div style={{textAlign:"center" ,margin:"auto"}}>
      <img width="10%" height="10%" src="/images/logoVIVALDI.png" />

      {props.role === "ADMIN" ? (
        <h1 style={{ color: "white" }}>
          Welcome Admin! Here are all the posted activities.
        </h1>
      ) : (
        <h1 style={{ color: "white" }}>
          Welcome! Here are the {props.club} activities!
        </h1>
      )}</div>
      <Container>
        <Row>
          <Col sm={4}>
            <hr />
            <div style={{ display: "flex" }}>
              <h1 style={{ fontSize: "80px", color: "white" }}>{props.club}</h1>
              <h3 style={{ color: "black" }}> Forum</h3>
            </div>
            <hr />
            {props.role === "ADMIN" || props.role === "teacher" ? (
              <div className="PostActivity">
                <Form>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control
                      type="activityTitle"
                      name="activityTitle"
                      placeholder="Activity Title"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control
                      type="activityDescription"
                      name="activityDescription"
                      as="textarea"
                      rows={3}
                      placeholder="Describe the Activity"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control
                      type="date"
                      name="deadline"
                      placeholder="Describe the Activity"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Club</Form.Label>
                    <Form.Control
                      type="club"
                      name="club"
                      as="select"
                      onChange={handleChange}
                    >
                      <option value="Music Club">Music Club</option>
                  <option value="Sports Club">Sports Club</option>
                  <option value="Art Club">Art Club</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
                {errors && errors.map((el) => <p> {el.msg} </p>)}
                <Button
                  className="CommentBtn"
                  variant="info"
                  onClick={() => dispatch(submitActivity(activity))}
                >
                  Submit Activity
                </Button>
                <hr />
                <h3>Activities posted by you:</h3>
                <hr />
                <ListGroup>
                  <div className="NewestFirst">
                  {SubmittedActivities.map((el) => (
                    <div>
                      {props.posterId == el.posterId ? (
                        <ListGroup.Item key={el._id} className="SingleForm">
                          <h5>
                            <b>Title:</b> {el.activityTitle}
                          </h5>
                          <h6>{el.club}</h6>
                          <hr />
                          <h5>
                            <b>
                              {el.posterFirstName} {el.posterLastName} :
                            </b>
                          </h5>{" "}
                          <h5>{el.activityDescription}</h5>
                          <h6>Deadline: {el.deadline}</h6>
                          <h6>{el.updatedAt}</h6>
                          {props.role === "ADMIN" ||
                          props.posterId === el.posterId ? (
                            <div className="actionBtn2">
                              <MyClubActivityDelete id={el._id} />
                              <MyClubActivityEdit
                                oldActivity={el}
                                id={el._id}
                              />
                            </div>
                          ) : props.role === "student" ? (
                            <div>
                              <PostStudentProject
                                firstName={props.firstName}
                                lastName={props.lastName}
                                posterId={props.posterId}
                                Activity={el}
                              />
                            </div>
                          ) : null}
                        </ListGroup.Item>
                      ) : null}
                    </div>
                  ))}
                  </div>
                </ListGroup>
              </div>
            ) : null}
            <img
              width="100%"
              src="https://www.pinclipart.com/picdir/big/41-414754_do-my-for-me-online-assignment-writing-homework.png"
            />
          </Col>
          <Col sm={8}>
            <div className="AllForms">
              <hr />
              <h3>List of Your Activities </h3>
              <hr />
              <ListGroup>
                <div className="NewestFirst">
                {SubmittedActivities.map((el) => (
                  <div >
                    {props.role === "ADMIN" || props.club === el.club ? (
                      <ListGroup.Item key={el._id} className="SingleForm">
                        <h5>
                          <b>Title:</b> {el.activityTitle}
                        </h5>
                        <h6>{el.club}</h6>
                        <hr />
                        <h5>
                          <b>
                            {el.posterFirstName} {el.posterLastName} :
                          </b>
                        </h5>{" "}
                        <h5>{el.activityDescription}</h5>
                        <h6>Deadline: {el.deadline}</h6>
                        <h6>{el.updatedAt}</h6>
                        {props.role === "ADMIN" ||
                        props.posterId === el.posterId ? (
                          <div className="actionBtn2">
                            <MyClubActivityDelete id={el._id} />
                            <MyClubActivityEdit oldActivity={el} id={el._id} />
                          </div>
                        ) : props.role === "student" ? (
                          <div>
                            <PostStudentProject
                              firstName={props.firstName}
                              lastName={props.lastName}
                              posterId={props.posterId}
                              Activity={el}
                            />
                          </div>
                        ) : null}
                      </ListGroup.Item>
                    ) : null}
                  </div>
                ))}
                </div>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PostActivity;
