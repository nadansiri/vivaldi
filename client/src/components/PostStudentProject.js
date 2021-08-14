import React, { useState, useEffect } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  submitStudentProject,
  allSubmittedStudentProjects,
} from "../Redux/actions/publicActions";

const PostStudentProject = (props) => {
  const [studentProject, setStudentProject] = useState({
    posterFirstName: props.firstName,
    posterLastName: props.lastName,
    posterId: props.posterId,
    teacherId: props.Activity.posterId,
    activityId: props.Activity._id,
    club: props.Activity.club,
  });

  const handleChange = (e) => {
    setStudentProject({ ...studentProject, [e.target.name]: e.target.value });
  };

  const errors = useSelector((state) => state.publicReducer.errors);
  const dispatch = useDispatch();

  const getStudentProjects = () => dispatch(allSubmittedStudentProjects());
  const SubmittedStudentProjects = useSelector(
    (state) => state.publicReducer.SubmittedStudentProjects
  );
  useEffect(() => {
    getStudentProjects();
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleSave = (e) => {
    setShow(false);
    //***********dispatch */
    dispatch(submitStudentProject(studentProject))
  };

  return (
    <div>
      <Button
        variant="outline-success"
        className="btn2"
        onClick={handleShow}
      >
        Submit Your Project
      </Button>

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Submit Your Project</Modal.Title>
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
          <Button
            variant="outline-success"
            onClick={handleSave}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      {errors && errors.map((el) => <p> {el.msg} </p>)}

      <hr />
      {/*
      <div className="AllForms">
        <h4>List of Your Projects </h4>
        <ListGroup>
          {SubmittedStudentProjects.map((el) => (<div>
            {props.role === "ADMIN" || props.posterId === el.posterId ? 
            (
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
              {props.role === "ADMIN" || props.posterId === el.posterId ? (<div className="actionBtn2">
                <MyClubActivityDelete id={el._id} /><MyClubActivityEdit oldActivity={el} id={el._id} /></div>
              ) : null}
              
            </ListGroup.Item>
           ) : null}</div>
          ))}
        </ListGroup>
      </div>
      */}
    </div>
  );
};

export default PostStudentProject;
