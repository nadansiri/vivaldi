import {Route, Redirect} from 'react-router-dom'
import StudentDashbord from '../pages/StudentDashbord'

const PrivateRoute = ({component: Component, ...rest} ) => {
    const StudentToken = localStorage.getItem('studentToken')
    const TeacherToken = localStorage.getItem('teacherToken')
    
    /*if (studentToken||teacherToken) {
    return <Route component={Component} />
    }
    return <Redirect to='/studentlogin' />*/
    if (StudentToken||TeacherToken)
    return (<Route component={Component} />)
    
    return (<Redirect to='/' />)

}

export default PrivateRoute
