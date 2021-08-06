import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import {loginTeacher} from "../Redux/actions/teacherActions"

const TeacherSignIn = ({history}) => {
    const [teacher, setTeacher] = useState({})

    const handleChange = (e) => {
        setTeacher({...teacher, [e.target.name] : e.target.value })
    }
    const errors = useSelector(state => state.teacherReducer.errors)
    const dispatch = useDispatch()
    return (
        <div className="wrapper">
        <Form className="register-page">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter your password" onChange={handleChange} />
            </Form.Group>
            {errors && errors.map(el => <p> {el.msg} </p>) }
            <Button className="CommentBtn" variant="info" onClick={() => dispatch(loginTeacher(teacher, history))} >
                Sign In
            </Button>
        </Form>
        </div>
    )
}

export default TeacherSignIn
