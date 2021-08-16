import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editNews} from "../Redux/actions/publicActions";

const PostNewsEdit = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const updateID = props.id;
  const [editedNews, setEditedNews] = useState(props.oldNews);

  const handleShow = () => {
    setShow(true);
  };
  const handleChange = (e) => {
    setEditedNews({ ...editedNews, [e.target.name]: e.target.value });
  };
  const errors = useSelector((state) => state.publicReducer.errors);
  const dispatch = useDispatch();
  const handleSave = (e) => {
    setShow(false);
    //***********dispatch */
    dispatch(editNews(updateID, editedNews));
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
                  value={editedNews.title}
                  placeholder={editedNews.title}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="link"
                name="newsPhotoURL"
                placeholder="Photo URL"
                onChange={handleChange}
              />
            </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="newsBody"
                  name="newsBody"
                  as="textarea"
                  rows={3}
                  value={editedNews.newsBody}
                  placeholder={editedNews.newsBody}
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

export default PostNewsEdit;
