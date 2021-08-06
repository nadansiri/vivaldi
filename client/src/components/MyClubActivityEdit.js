import React, { useState, useEffect } from "react";
import { Modal, Button, Form} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import {editActivity} from "../Redux/actions/publicActions"

const MyClubActivityEdit = (props) => {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const updateID = props.id;
  const [editedActivity, setEditedActivity] = useState(props.oldActivity);

  const handleShow = () => {
    setShow(true);
  };
  const handleChange = (e) => {
    setEditedActivity({ ...editedActivity, [e.target.name]: e.target.value });
  };
  const errors = useSelector(state => state.publicReducer.errors)
  const dispatch = useDispatch()
  const handleSave = (e) => {
    setShow(false);
    //***********dispatch */
    dispatch(editActivity(updateID,editedActivity))
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
                  <option value="Club 1">Club 1</option>
                  <option value="Club 2">Club 2</option>
                  <option value="Club 3">Club 3</option>
                </Form.Control>
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

export default MyClubActivityEdit;
