import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginStudent } from "../Redux/actions/studentActions";
import { Link } from "react-router-dom";


const StudentSignIn = ({ history }) => {
  const [student, setStudent] = useState({});

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const errors = useSelector((state) => state.studentReducer.errors);
  const dispatch = useDispatch();
  return (
    <div>
      <Container className="wrapper">
        <Row>
          <Col sm={5}>
            <img
              src="https://img.freepik.com/free-vector/home-office-concept-black-man-with-headphones-laptop-working-from-home-student-freelancer_203228-605.jpg?size=626&ext=jpg"
              alt="Aaa"
              width="100%"
            />
          </Col>
          <Col sm={7}>
            <div className="wrapper">
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
                {errors &&
                  errors.map((el) => <p style={{ color: "red" }}>{el.msg}</p>)}
                {console.log("object", errors)}
                <Button
                  className="CommentBtn"
                  variant="info"
                  onClick={() => dispatch(loginStudent(student, history))}
                >
                  Sign In
                </Button>
                {errors
                  ? errors.map((el) => {
                      <p style={{ color: "red" }}> {el.msg} </p>;
                    })
                  : null}
                  <hr/>
                  <Link
                    to="/studentregister"
                    style={{ textDecoration: "none" }}
                  >
                    Don't have an account? Sign Up
                  </Link>
                
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StudentSignIn;
