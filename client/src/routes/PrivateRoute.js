import React from 'react'
import {  Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest} ) => {
    const studentToken = localStorage.getItem('studentToken')
    const teacherToken = localStorage.getItem('teacherToken')
    if (studentToken||teacherToken) {
    return <Route component={Component} />
    }
    return <Redirect to='/studentlogin' />
}

export default PrivateRoute
