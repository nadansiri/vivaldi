import React, { useState, useEffect } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";
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
    <div>
      <h1>Posts</h1>

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

      <div className="AllForms">
        <ListGroup>
          {SubmittedPostsData.map((el) => (
            <ListGroup.Item key={el._id} className="SingleForm">
              <h5>
                <b>Title:</b> {el.title}
              </h5>
              <hr />
              <h5>
                <b>
                  {el.firstName} {el.lastName} :
                </b>
              </h5>{" "}
              <h5>{el.postBody}</h5>
              <h6>{el.updatedAt}</h6>
              {props.role === "ADMIN" || props.posterId === el.posterId ? (<div className="actionBtn2">
                <ForumPostDelete id={el._id} /><ForumPostEdit oldPost={el} id={el._id} /></div>
              ) : null}
              
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default PostInForum;
