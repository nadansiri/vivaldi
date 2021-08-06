import React from "react";
import { Button, ListGroup, ListGroupItem, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logoutTeacher } from "../Redux/actions/teacherActions";
import { Link } from "react-router-dom";

const TeacherDashbord = () => {
  const teacher = useSelector((state) => state.teacherReducer.teacher); //mapStateToProps
  const dispatch = useDispatch();
  return (
      <div className="dashboard">
      <h1>Welcome {teacher.firstName} {teacher.lastName}</h1>
      
      {teacher.role === "ADMIN" ? (
        <div>
          <h4>ADMIN</h4>
        </div>
      ) : (
        null
      )}
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
                FirstName: <b>{teacher.firstName}</b>
              </ListGroupItem>
              <ListGroupItem variant="light">
                LastName: <b>{teacher.lastName}</b>
              </ListGroupItem>
              <ListGroupItem variant="light">
                Email: <b>{teacher.email}</b>
              </ListGroupItem>
              <ListGroupItem variant="light">
                Club: <b>{teacher.club}</b>
              </ListGroupItem>
              <ListGroupItem variant="light">
                <Button style={{ width: "120px", margin: "5% 48%" }}>
                  <Link
                    to="/teacherlogin"
                    onClick={() => dispatch(logoutTeacher())}
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

export default TeacherDashbord;
