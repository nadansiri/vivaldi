import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutStudent } from "../Redux/actions/studentActions";

const StudentDashbord = () => {
  const student = useSelector((state) => state.studentReducer.student); //mapStateToProps
  const dispatch = useDispatch();
  return (
    <div className="dashboard">
      <h1>Welcome {student.firstName} {student.lastName}</h1>
      <hr/>
       <div className="Contact3">
          <div className="ContactDetails1">
            <Card.Img
              style={{ width: "15rem", margin: "auto" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqI4txTRkj4_pCfr3NlNdbCbLYgX-nqjMX8wHEfx_A6Q8luaudlecd84nMDGZ1a4nwA0&usqp=CAU"
              roundedCircle
              alt="contact photo"
            />
          </div>
          
          <div className="ContactDetails2">
            <ListGroup>
              <ListGroupItem variant="light">
                FirstName: <b>{student.firstName}</b>
              </ListGroupItem>
              <ListGroupItem variant="light">
                LastName: <b>{student.lastName}</b>
              </ListGroupItem>
              <ListGroupItem variant="light">
                Email: <b>{student.email}</b>
              </ListGroupItem>
              <ListGroupItem variant="light">
                Club: <b>{student.club}</b>
              </ListGroupItem>
              <ListGroupItem variant="light">
                <Button style={{ width: "120px", margin: "5% 48%" }}>
                  <Link
                    to="/studentlogin"
                    onClick={() => dispatch(logoutStudent())}
                    style={{ color: "white" }}
                  >
                    log out
                  </Link>
                </Button>
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
      </div>
  );
};

export default StudentDashbord;
