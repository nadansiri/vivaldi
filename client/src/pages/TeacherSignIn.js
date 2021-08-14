import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginTeacher } from "../Redux/actions/teacherActions";
import { Link } from "react-router-dom";


const TeacherSignIn = ({ history }) => {
  const [teacher, setTeacher] = useState({});

  const handleChange = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };
  const errors = useSelector((state) => state.teacherReducer.errors);
  const dispatch = useDispatch();
  return (
    <div>
      <Container className="wrapper">
        <Row>
          <Col sm={5}>
            <img
              src="https://img.freepik.com/free-vector/tiny-teachers-with-educational-tools-stationery-isolated-flat-vector-illustration-cartoon-teachers-different-disciplines-as-geography-math-physical-culture-education-school-concept_74855-13261.jpg?size=626&ext=jpg"
              alt="Aaa"
              width="100%"
            />
          </Col>
          <Col sm={7}>
              <Form className="register-page">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                  />
                </Form.Group>
                {errors && errors.map((el) => <p> {el.msg} </p>)}
                <Button
                  className="CommentBtn"
                  variant="info"
                  onClick={() => dispatch(loginTeacher(teacher, history))}
                >
                  Sign In
                </Button>
                <hr />
                <Link to="/teacherregister" style={{ textDecoration: "none" }}>
                  Don't have an account? Sign Up
                </Link>
              </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeacherSignIn;
