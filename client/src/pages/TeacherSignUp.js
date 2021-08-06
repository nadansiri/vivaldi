import React, { useState } from 'react';
import {Button, Form} from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import {registerTeacher} from "../Redux/actions/teacherActions"

const TeacherSignUp = ({history}) => {
    const [newTeacher, setNewTeacher] = useState({})

    const handleChange = (e) => {
        setNewTeacher({...newTeacher, [e.target.name] : e.target.value})
    }
    const errors = useSelector(state => state.teacherReducer.errors)
    const dispatch = useDispatch()
    return (
        <div className="wrapper RegistrationFormWrapper">
        <Form className="register-page">
            <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName" placeholder="Enter your first name" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastName" placeholder="Enter your last name" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter your password" onChange={handleChange} />
            </Form.Group>
            {errors && errors.map(el => <p> {el.msg} </p>) } {/* el => {msg: "hhhh"} */
            }
            <Button className="CommentBtn" variant="info" onClick={() => dispatch(registerTeacher(newTeacher, history))} >
                Register
            </Button>
        </Form>
        <img
        src="https://img.freepik.com/vecteurs-libre/modele-formulaire-inscription-design-plat_23-2147971971.jpg?size=338&ext=jpg&ga=GA1.2.1851677743.1620172800"
        alt="registration"
      />
        </div>
    )
}

export default TeacherSignUp
