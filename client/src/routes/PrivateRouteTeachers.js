import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRouteTeachers = ({component: Component, ...rest}) => {
    const teacherToken = localStorage.getItem('teacherToken')
    if (teacherToken) {
    return <Route component={Component} />
    }
    return <Redirect to='/teacherlogin' />
}

export default PrivateRouteTeachers
