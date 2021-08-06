import React, { useState, useEffect } from "react";
import { Modal, Button, InputGroup, FormControl, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editStudents } from "../Redux/actions/studentActions";

const EditStudentProfile = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const updateID = props.id;
  const [Edited, setEdited] = useState(props.student);

  const handleShow = () => {
    setShow(true);
  };
  const handleChange = (e) => {
    setEdited({ ...Edited, [e.target.name]: e.target.value });
  };
  const errors = useSelector((state) => state.studentReducer.errors);
  const dispatch = useDispatch();
  const handleSave = (e) => {
    setShow(false);
    //***********dispatch */
    dispatch(editStudents(updateID, Edited));
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
            <InputGroup className="mb-3">
              <FormControl
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="email@example.com"
                name="email"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Password"
                type="password"
                name="password"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Club</Form.Label>
                <Form.Control
                  type="club"
                  name="club"
                  as="select"
                  onChange={handleChange}
                >
                  <option value="Club 1">Club 1</option>
                  <option value="Club 2">Club 2</option>
                  <option value="Club 3">Club 3</option>
                </Form.Control>
              </Form.Group>
            </InputGroup>
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

export default EditStudentProfile;
