import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  ListGroup,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  submitPostInForum,
  allPostsInForum,
} from "../Redux/actions/publicActions";
import ForumPostDelete from "./ForumPostDelete";
import ForumPostEdit from "./ForumPostEdit";

const PostInForum = (props) => {
  const [newPost, setNewPost] = useState({
    firstName: props.firstName,
    lastName: props.lastName,
    posterId: props.posterId,
  });

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const errors = useSelector((state) => state.publicReducer.errors);
  const dispatch = useDispatch();

  const getForms = () => dispatch(allPostsInForum());
  const SubmittedPostsData = useSelector(
    (state) => state.publicReducer.SubmittedPostsData
  );
  useEffect(() => {
    getForms();
  }, []);

  return (
    <div className="PublicForum">
      <Container>
        <div style={{ display: "flex" }}>
          <h1 style={{ fontSize: "80px", color: "white" }}>Public Forum</h1>
          <h3 style={{ color: "black" }}>(Logged in as {props.role})</h3>
        </div>
        <Row>
          <Col sm={4}>
            <hr />
            <div className="PostInForum">
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control
                    type="title"
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control
                    type="postBody"
                    name="postBody"
                    as="textarea"
                    rows={3}
                    placeholder="Your Post"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form>
              {errors && errors.map((el) => <p> {el.msg} </p>)}
              <Button
                className="CommentBtn"
                variant="info"
                onClick={() => dispatch(submitPostInForum(newPost))}
              >
                Submit Post
              </Button>
            </div>
            <hr />
            <img width="100%" src="/images/Image1pubfo.png" />
          </Col>
          <Col sm={8}>
            <div className="AllForms ">
              <div className="NewestFirst">
                {SubmittedPostsData.map((el) => (
                  <Card key={el._id} className="SingleForm">
                    <Card.Header>Title: {el.title}</Card.Header>
                    <Card.Body>
                      <Card.Title>
                        {el.firstName} {el.lastName} :
                      </Card.Title>
                      <Card.Text>{el.postBody}</Card.Text>
                      <h6>{el.updatedAt}</h6>
                      {props.role === "ADMIN" ||
                      props.posterId === el.posterId ? (
                        <div className="actionBtn2">
                          <ForumPostDelete id={el._id} />
                          <ForumPostEdit oldPost={el} id={el._id} />
                        </div>
                      ) : null}
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PostInForum;
