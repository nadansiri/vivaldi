import React, { useState, useEffect } from "react";
import { Form, Button, Modal, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  submitStudentProject,
  allSubmittedStudentProjects,
} from "../Redux/actions/publicActions";

import MyClubActivityDelete from "./MyClubActivityDelete";
import MyClubActivityEdit from "./MyClubActivityEdit";
import PostStudentProjectDeletePosts from "./PostStudentProjectDeletePosts";
import PostStudentProjectEditPosts from "./PostStudentProjectEditPosts";

const PostStudentProjectGetPosts = (props) => {
  const [studentProject, setStudentProject] = useState({
    posterFirstName: props.firstName,
    posterLastName: props.lastName,
    posterId: props.posterId,
    club: props.club,
  });

  const errors = useSelector((state) => state.publicReducer.errors);
  const dispatch = useDispatch();

  const getStudentProjects = () => dispatch(allSubmittedStudentProjects());
  const SubmittedStudentProjects = useSelector(
    (state) => state.publicReducer.SubmittedStudentProjects
  );
  useEffect(() => {
    getStudentProjects();
  }, []);

  return (
    <div>
      {errors && errors.map((el) => <p> {el.msg} </p>)}
      <hr />
      <div className="AllForms">
        <h4>List of Projects </h4>
        <hr />
        <ListGroup>
          {SubmittedStudentProjects.map((el) => (
            <div>
              {props.role === "ADMIN" ||
              props.posterId === el.posterId ||
              props.posterId === el.teacherId ? (
                <ListGroup.Item key={el._id} className="SingleForm">
                  <h5>
                    <b>Title:</b> {el.activityId}
                  </h5>
                  <h6>{el.club}</h6>
                  <hr />
                  <h5>
                    <b>
                      {el.posterFirstName} {el.posterLastName} :
                    </b>
                  </h5>{" "}
                  <a href={el.projectLink}>{el.projectLink}</a>
                  <h6>{el.updatedAt}</h6>
                  <hr />
                  <h5>Review: {el.review} </h5>
                  <h6>Mark: {el.mark}/100 </h6>
                  {props.role === "ADMIN" || props.posterId === el.posterId ? (
                    <div className="actionBtn2">
                      {props.role === "ADMIN" ||props.role === "teacher" ? (
                        <PostStudentProjectDeletePosts id={el._id} />
                      ) : null}
                      <PostStudentProjectEditPosts
                        isTeacher={props.role}
                        oldProject={el}
                        id={el._id}
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

export default PostStudentProjectGetPosts;
