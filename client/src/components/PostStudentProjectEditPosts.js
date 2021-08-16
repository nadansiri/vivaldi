import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editStudentProject } from "../Redux/actions/publicActions";

const PostStudentProjectEditPosts = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const updateID = props.id;
  const [editedStudentProject, setEditedStudentProject] = useState(
    props.oldProject
  );

  const handleShow = () => {
    setShow(true);
  };
  const handleChange = (e) => {
    setEditedStudentProject({
      ...editedStudentProject,
      [e.target.name]: e.target.value,
    });
  };
  const errors = useSelector((state) => state.publicReducer.errors);
  const dispatch = useDispatch();
  const handleSave = (e) => {
    setShow(false);
    //***********dispatch */
    dispatch(editStudentProject(updateID, editedStudentProject));
  };

  return (
    <div>
      {props.isTeacher === "student" ? (
        <>
          <Button
            variant="outline-primary"
            className="btn2"
            onClick={handleShow}
          >
            Edit Your Project
          </Button>
          <Modal show={show}>
            <Modal.Header>
              <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control
                    type="projectLink"
                    name="projectLink"
                    placeholder="Submit A Valid Link To Your Project"
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
      ) :  (
        <>
          <Button
            variant="outline-success"
            className="btn2"
            onClick={handleShow}
          >
            Review The Project
          </Button>
          <Modal show={show}>
            <Modal.Header>
              <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control
                    type="review"
                    name="review"
                    value={editedStudentProject.review}
                    placeholder="Review"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control
                    type="number"
                    name="mark"
                    placeholder="Grade/100"
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
      ) }
    </div>
  );
};

export default PostStudentProjectEditPosts;
