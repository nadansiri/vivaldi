import React, { useState, useEffect } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DeleteComment from "../components/DeleteComment";

import {
  submitComment,
  allPublicComments,
} from "../Redux/actions/publicActions";

const PublicComment = () => {
  const [comment, setComment] = useState({});

  const handleChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };
  const errors = useSelector((state) => state.publicReducer.errors);
  const dispatch = useDispatch();

  const getComments = () => dispatch(allPublicComments());
  const PublicCommentsData = useSelector(
    (state) => state.publicReducer.PublicCommentsData
  );
  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="PublicComment">
              <hr/>
      <div className="SubmitComment">
        <Form>
          <Form.Control
            plaintext
            type="commenter"
            name="commenter"
            placeholder="User Name"
            onChange={handleChange}
          />
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              type="commentBody"
              name="commentBody"
              placeholder="Got anything on you mind?"
              as="textarea"
              rows={3}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
        {errors && errors.map((el) => <h2> {el.msg} </h2>)}
        <div className="CommentBtnPlacement">
        <Button className="CommentBtn" variant="info" onClick={() => dispatch(submitComment(comment))}>
          Comment
        </Button>
        <hr/>
        </div>
      </div>
      <div className="AllComments">
        {
          //Don't forget to delete!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          console.log("CCCCCCCCCCCCCCCCCCCCC", PublicCommentsData)
        }
        <ListGroup>
          {PublicCommentsData.map((el) => (
            <ListGroup.Item key={el._id} className="SingleComment">
              <h5>
                <b>{el.commenter} :</b>
              </h5>{" "}
              <h5>{el.commentBody}</h5> <h6>{el.updatedAt}</h6>
              <DeleteComment id={el._id}/>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default PublicComment;
