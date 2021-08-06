import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DeleteStudent from "../components/DeleteStudent.js";
import DeleteTeacher from "../components/DeleteTeacher.js";
import EditStudentProfile from "../components/EditStudentProfile.js";
import EditTeacherProfile from "../components/EditTeacherProfile.js";
import { allStudents } from "../Redux/actions/studentActions.js";
import { allTeachers } from "../Redux/actions/teacherActions";

const ManageAccounts = (props) => {
  const StudentErrors = useSelector((state) => state.studentReducer.errors);
  const TeacherErrors = useSelector((state) => state.teacherReducer.errors);
  const teacher = useSelector((state) => state.teacherReducer.teacher);

  const dispatch = useDispatch();

  const getStudentsList = () => dispatch(allStudents());
  const StudentsData = useSelector(
    (state) => state.studentReducer.StudentsData
  );

  const getTeachersList = () => dispatch(allTeachers());
  const TeachersData = useSelector(
    (state) => state.teacherReducer.TeachersData
  );

  useEffect(() => {
    getStudentsList();
    getTeachersList();
  }, []);

  return (
    <div className="manageList">
      <>
        <hr />
        <h1>Students</h1>
        <hr />
        {StudentErrors && StudentErrors.map((el) => <h2> {el.msg} </h2>)}
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>#ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Club</th>
              <th></th>
            </tr>
          </thead>
          {StudentsData.map((el) => (
            <tbody key={el._id}>
              <tr>
                <td>
                  <Link to={`/api/students/details/${el._id}`}>{el._id}</Link>
                </td>
                <td>{el.firstName}</td>
                <td>{el.lastName}</td>
                <td>{el.email}</td>
                <td>{el.club}</td>
                <td>
                  <div className="actionBtn">
                    <EditStudentProfile student={el} id={el._id} />
                    <DeleteStudent id={el._id} />
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        <hr />
      </>
      {
        //Teachers List //Accessed only by admin
          //Render if Admin
          teacher.role === "ADMIN" ? (
      <>
        <h1>Teachers</h1>
        <hr />
        {TeacherErrors && TeacherErrors.map((el) => <h2> {el.msg} </h2>)}
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>#ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Club</th>
              <th></th>
            </tr>
          </thead>
          {TeachersData.map((el) => (
            <tbody key={el._id}>
              <tr>
                <td>
                  <Link to={`/api/teachers/details/${el._id}`}>{el._id}</Link>
                </td>
                <td>{el.firstName}</td>
                <td>{el.lastName}</td>
                <td>{el.email}</td>
                <td>{el.club}</td>
                <td>
                  <div className="actionBtn">
                    <EditTeacherProfile teacher={el} id={el._id} />
                    <DeleteTeacher id={el._id} />
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </>) : (
          null
        )
      }
    </div>
  );
};

export default ManageAccounts;
