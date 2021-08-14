import React, { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerStudent } from "../Redux/actions/studentActions";
import { Link } from "react-router-dom";


const StudentSignUp = ({ history }) => {
  const [newStudent, setNewStudent] = useState({});

  const handleChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
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
            <div className="wrapper RegistrationFormWrapper">
              <Form className="register-page">
                <Form.Group controlId="formBasicFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    onChange={handleChange}
                  />
                </Form.Group>
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
                {errors && errors.map((el) => <p style={{ color: "red" }}> {el.msg} </p>)}{" "}
                {/* el => {msg: "hhhh"} */}
                <Button
                  className="CommentBtn"
                  variant="info"
                  onClick={() => dispatch(registerStudent(newStudent, history))}
                >
                  Register
                </Button>
                <hr />
                <Link to="/studentlogin" style={{ textDecoration: "none" }}>
                  Already have an account? Sign In
                </Link>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StudentSignUp;
