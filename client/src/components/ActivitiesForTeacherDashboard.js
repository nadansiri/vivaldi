import React, { useState, useEffect } from "react";
import { Form, Button, ListGroup, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  allSubmittedStudentProjects,
  allActivities,
} from "../Redux/actions/publicActions";
import { Link } from "react-router-dom";

import MyClubActivityDelete from "./MyClubActivityDelete";
import MyClubActivityEdit from "./MyClubActivityEdit";

const ActivitiesForTeacherDashboard = (props) => {
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("Show More");
  const handleShow = () => {
    setShow(!show);
    show ? setMsg("Show More") : setMsg("Hide");
  };

  const errors = useSelector((state) => state.publicReducer.errors);
  const dispatch = useDispatch();

  const getActivities = () => dispatch(allActivities());
  const SubmittedActivities = useSelector(
    (state) => state.publicReducer.SubmittedActivities
  );
  const getStudentProjects = () => dispatch(allSubmittedStudentProjects());
  const SubmittedStudentProjects = useSelector(
    (state) => state.publicReducer.SubmittedStudentProjects
  );
  useEffect(() => {
    getActivities();
    getStudentProjects();
  }, []);
  const result = SubmittedActivities.filter(
    (el) => props.posterId === el.posterId
  );
  const res = result.length;

  const resultStudents = SubmittedStudentProjects.filter(
    (el) => props.posterId === el.teacherId
  );
  const resSt = resultStudents.length;
  //Not reviewed yet
  const notReviewed = resultStudents.filter(
    (el) => el.review === "Not reviewed yet"
  );
  console.log(
    "zzzzzzz",
    resultStudents,
    "nb",
    resSt,
    "Not reviewed yet",
    notReviewed
  );
  return (
    <div>
      <div className="profileElement">
        {res > 0 ? (
          <>
            <h3>Last posted Activity</h3>
            <hr />
            <Card border="primary">
              <Card.Header>
                <h5>
                  <b>Title:</b> {result[res - 1].activityTitle}
                </h5>
                <h6>{result[res - 1].club}</h6>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  <h6>Deadline: {result[res - 1].deadline}</h6>
                  <h6>{result[res - 1].updatedAt}</h6>
                </Card.Title>
                <hr />

                <h5>{result[res - 1].activityDescription}</h5>
              </Card.Body>
            </Card>
            <Button style={{width:"200px", margin:"10px"}} variant="primary" onClick={handleShow}>{msg}</Button>
            {show ? (
              <ListGroup>
                <hr />
                {result.map((el) => (
                  <div>
                    <ListGroup.Item key={el._id} className="SingleForm">
                      <h5>
                        <b>Title:</b> {el.activityTitle}
                      </h5>
                      <h6>{el.club}</h6>
                      <hr />

                      <h5>{el.activityDescription}</h5>
                      <h6>Deadline: {el.deadline}</h6>
                      <h6>{el.updatedAt}</h6>
                      <div className="actionBtn2">
                        <MyClubActivityDelete id={el._id} />
                        <MyClubActivityEdit oldActivity={el} id={el._id} />
                      </div>
                    </ListGroup.Item>
                  </div>
                ))}
              </ListGroup>
            ) : null}
          </>
        ) : (
          <p>You didn't post any activities yet</p>
        )}
      </div>
      <div className="profileElements">
        <div className="profileElement2">
          <h3>"You have proposed</h3>
          {res === 1 ? (
            <>
              <h1>{res}</h1>
              <h3>Activity!"</h3>
            </>
          ) : (
            <>
              <h1>{res}</h1>
              <h3>Activities!"</h3>
            </>
          )}

          {res === 0 ? (
            <Link to="/clubforum" style={{ color: "green" }}>
              Propose an activity!
            </Link>
          ) : null}
        </div>
        {res > 0 ? (
          <>
            <div className="profileElement2">
              {resSt > 1 ? (
                <>
                  <h3>{resSt} students submitted their project.</h3>
                  <hr/>
                  <Link to="/myprojects" style={{ color: "green" }}>
                    Check the projects!
                  </Link>
                </>
              ) : resSt === 1 ? (
                <>
                  <h3>{resSt} student submitted their project.</h3>
                  <hr/>
                  <Link to="/myprojects" style={{ color: "green" }}>
                    Check the projects!
                  </Link>
                </>
              ) : (
                <h3>No students submitted their projects yet.</h3>
              )}
            </div>
            {resSt > 0 ? (
              <div className="profileElement2">
                <h3>"You have </h3>
                {notReviewed.length === 1 ? (
                  <>
                    {" "}
                    <h1>{notReviewed.length}</h1>
                    <h3>submitted project to review. "</h3>
                  </>
                ) : (
                  <>
                    {" "}
                    <h1>{notReviewed.length}</h1>
                    <h3>submitted projects to review. "</h3>
                  </>
                )}
              </div>
            ) : null}
          </>
        ) : null}
      </div>
      <hr />
      <div className="AllForms"></div>
    </div>
  );
};

export default ActivitiesForTeacherDashboard;
