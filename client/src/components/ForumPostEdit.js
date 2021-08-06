import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editPostInForum } from "../Redux/actions/publicActions";

const ForumPostEdit = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const updateID = props.id;
  const [editedPost, setEditedPost] = useState(props.oldPost);

  const handleShow = () => {
    setShow(true);
  };
  const handleChange = (e) => {
    setEditedPost({ ...editedPost, [e.target.name]: e.target.value });
  };
  const errors = useSelector((state) => state.publicReducer.errors);
  const dispatch = useDispatch();
  const handleSave = (e) => {
    setShow(false);
    //***********dispatch */
    dispatch(editPostInForum(updateID, editedPost));
  };

  return (
    <div>
      <Button
        variant="outline-success"
        className="btn1"
        onClick={handleShow}
        className="btn1"
      >
        Edit
      </Button>
      <>
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-success" onClick={handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default ForumPostEdit;
