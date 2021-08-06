import React, { useState, useEffect } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { submitActivity, allActivities } from "../Redux/actions/publicActions";

import MyClubActivityDelete from "./MyClubActivityDelete";
import MyClubActivityEdit from "./MyClubActivityEdit";
import PostStudentProject from "./PostStudentProject";

const PostActivity = (props) => {
  const [activity, setActivity] = useState({
    posterFirstName: props.firstName,
    posterLastName: props.lastName,
    posterId: props.posterId,
    club: props.club,
  });

  const handleChange = (e) => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
  };

  const errors = useSelector((state) => state.publicReducer.errors);
  const dispatch = useDispatch();

  const getActivities = () => dispatch(allActivities());
  const SubmittedActivities = useSelector(
    (state) => state.publicReducer.SubmittedActivities
  );
  useEffect(() => {
    getActivities();
  }, []);

  return (
    <div>
      <h3>Activities</h3>
      {props.role === "ADMIN" || props.role === "teacher" ? (
        <div className="PostActivity">
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
          {errors && errors.map((el) => <p> {el.msg} </p>)}
          <Button
            className="CommentBtn"
            variant="info"
            onClick={() => dispatch(submitActivity(activity))}
          >
            Submit Activity
          </Button>
        </div>
      ) : null}
      <hr />
      <div className="AllForms">
        <h4>List of Your Activities </h4>
        <ListGroup>
          {SubmittedActivities.map((el) => (
            <div>
              {props.role === "ADMIN" || props.club === el.club ? (
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
                  {props.role === "ADMIN" || props.posterId === el.posterId ? (
                    <div className="actionBtn2">
                      <MyClubActivityDelete id={el._id} />
                      <MyClubActivityEdit oldActivity={el} id={el._id} />
                    </div>
                  ) : props.role === "student" ? (
                    <div>
                      <PostStudentProject
                        firstName={props.firstName}
                        lastName={props.lastName}
                        posterId={props.posterId}
                        Activity={el}
                      />
                    </div>
                  ) : null}
                </ListGroup.Item>
              ) : null}
            </div>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default PostActivity;
