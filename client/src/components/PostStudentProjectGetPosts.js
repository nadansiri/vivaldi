import React, { useState, useEffect } from "react";
import { ListGroup, Card, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { allSubmittedStudentProjects } from "../Redux/actions/publicActions";

import PostStudentProjectDeletePosts from "./PostStudentProjectDeletePosts";
import PostStudentProjectEditPosts from "./PostStudentProjectEditPosts";

const PostStudentProjectGetPosts = (props) => {
  /*const [studentProject, setStudentProject] = useState({
    posterFirstName: props.firstName,
    posterLastName: props.lastName,
    posterId: props.posterId,
    club: props.club,
  });*/

  const errors = useSelector((state) => state.publicReducer.errors);
  const dispatch = useDispatch();

  const getStudentProjects = () => dispatch(allSubmittedStudentProjects());
  const SubmittedStudentProjects = useSelector(
    (state) => state.publicReducer.SubmittedStudentProjects
  );
  useEffect(() => {
    getStudentProjects();
  }, []);

  return (
    <div className="allProjects">
      <div style={{ display: "flex" }}>
        <h1 style={{ fontSize: "80px", color: "white" }}>Projects</h1>
        <h3 style={{ color: "black" }}>{props.club} Forum</h3>
      </div>
      {errors && errors.map((el) => <p> {el.msg} </p>)}
      <Container className="ContactDetails">
        <Row>
          <Col sm={4}>
            <>
              {props.role === "ADMIN" || props.role === "teacher" ? (
                <>
                  <hr />
                  <h4> In answer to assignments submitted by you </h4>
                  <hr />

                  <div className="NewestFirst">
                    {SubmittedStudentProjects.map((el) => (
                      <div key={el._id} className="SingleCard">
                        {props.posterId === el.teacherId ? (
                          <Card style={{ width: "100%" }}>
                            <Card.Body>
                              <Card.Title>
                                <b>Assignment ID:</b> {el.activityId}
                              </Card.Title>
                              <Card.Text>
                                <h6>{el.club}</h6>
                                <hr />
                                <h5>
                                  <b>
                                    {el.posterFirstName} {el.posterLastName} :
                                  </b>
                                </h5>{" "}
                                <a href={el.projectLink}>{el.projectLink}</a>
                                <h6>{el.updatedAt}</h6>
                                <hr />
                                <h5>Review: {el.review} </h5>
                                <h6>Mark: {el.mark}/100 </h6>
                                {props.role === "ADMIN" ||
                                props.posterId === el.posterId ? (
                                  <div className="actionBtn2">
                                    {props.role === "ADMIN" ||
                                    props.role === "teacher" ? (
                                      <PostStudentProjectDeletePosts
                                        id={el._id}
                                      />
                                    ) : null}
                                    {props.posterId === el.posterId ||
                                    props.posterId === el.teacherId ? (
                                      <PostStudentProjectEditPosts
                                        isTeacher={props.role}
                                        oldProject={el}
                                        id={el._id}
                                      />
                                    ) : null}
                                  </div>
                                ) : null}
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <img
                  width="100%"
                  src="https://www.pinclipart.com/picdir/big/41-414754_do-my-for-me-online-assignment-writing-homework.png"
                />
              )}
            </>
          </Col>
          <Col sm={8}>
            <hr />
            <h4>List of Projects </h4>
            <hr />
            <div className="AllForms NewestFirst">
              {SubmittedStudentProjects.map((el) => (
                <div key={el._id} className="SingleCard">
                  {props.role === "ADMIN" ||
                  props.posterId === el.posterId ||
                  props.club === el.club ||
                  props.posterId === el.teacherId ? (
                    <Card style={{ width: "100%" }}>
                      <Card.Body>
                        <Card.Title>
                          <b>Assignment ID:</b> {el.activityId}
                        </Card.Title>
                        <Card.Text>
                          <h6>{el.club}</h6>
                          <hr />
                          <h5>
                            <b>
                              {el.posterFirstName} {el.posterLastName} :
                            </b>
                          </h5>{" "}
                          <a href={el.projectLink}>{el.projectLink}</a>
                          <h6>{el.updatedAt}</h6>
                          <hr />
                          <h5>Review: {el.review} </h5>
                          <h6>Mark: {el.mark}/100 </h6>
                          {props.role === "ADMIN" ||
                          props.posterId === el.posterId ? (
                            <div className="actionBtn2">
                              {props.role === "ADMIN" ||
                              props.role === "teacher" ? (
                                <PostStudentProjectDeletePosts id={el._id} />
                              ) : null}
                              {props.posterId === el.posterId ||
                              props.posterId === el.teacherId ? (
                                <PostStudentProjectEditPosts
                                  isTeacher={props.role}
                                  oldProject={el}
                                  id={el._id}
                                />
                              ) : null}
                            </div>
                          ) : null}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  ) : null}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PostStudentProjectGetPosts;
