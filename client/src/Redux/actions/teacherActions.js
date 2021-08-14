//import axios
import axios from "axios"
//import action-types
import {
    REGISTER_TEACHER, 
    LOGIN_TEACHER, 
    GET_TEACHER,
    LOAD_TEACHER,  
    AUTH_TEACHER,
    LOGOUT_TEACHER,
    TEACHER_FAIL} from "../constants/actionTypes.js"

//register the Teacher
export const registerTeacher = (newTeacher, history) => async(dispatch) => {
    dispatch({
        type: LOAD_TEACHER
    })
    try {
        let res = await axios.post('/api/teachers/register', newTeacher)
        dispatch({
            type: REGISTER_TEACHER,
            payload: res.data //{msg, teacher, teacherToken}
        })
        history.push("/authteacher")
    } catch (error) {
        const {errors} = error.response.data
        dispatch({
            type: TEACHER_FAIL,
            payload: errors
        })
    }
}


//sign in the Teacher
export const loginTeacher = (teacher, history) => async(dispatch) => {
    dispatch({
        type: LOAD_TEACHER
    })
    try {
        let res = await axios.post('/api/teachers/login', teacher)
        dispatch({
            type: LOGIN_TEACHER,
            payload: res.data //{msg, user, Teacher-token}
        })
        history.push('/authteacher')
    } catch (error) {
        const {errors} = error.response.data
        dispatch({
            type: TEACHER_FAIL,
            payload: errors
        })
    }
}

//auth user
export const authedTeacher= () => async(dispatch) => {
    dispatch({
        type: LOAD_TEACHER
    })
    try {
        const config = {
            headers:{
                "authTeacherToken": localStorage.getItem('teacherToken')
            }
        }
        let res = await axios.get("/api/teachers/authteacher", config)
        dispatch({
            type: AUTH_TEACHER,
            payload: res.data //{user}
        })
    } catch (error) {
        const {errors} = error.response.data
        dispatch({
            type: TEACHER_FAIL,
            payload: errors
        })
    }
}


//logout user
export const logoutTeacher = () => {
    return {
        type: LOGOUT_TEACHER
    }
}

//Get All Teachers
export const allTeachers = () => async (dispatch) => {
  dispatch({
    type: LOAD_TEACHER
})
    try {
      let res = await axios.get("/api/teachers/all");
      dispatch({
        type: GET_TEACHER,
        payload: res.data, 
      });
    } catch (error) {
      //const { errors } = error.response.data;
      console.log("Error")
      dispatch({
        type: TEACHER_FAIL,
        //payload: errors,
      });
    }
  };
//Delete Teacher
export const deleteTeachers = (id) => async (dispatch) => {
    try {
      let res = await axios.delete(`/api/teachers/${id}`);
      dispatch(allTeachers());
    } catch (error) {
      const { errors } = error.response.data;
      dispatch({
        type: TEACHER_FAIL,
        payload: errors,
      });
    }
  };
//Edit Teacher
export const editTeachers = (id,updatedTeacher) => async (dispatch) => {
    try {
      let res = await axios.put(`/api/teachers/${id}`,updatedTeacher);
      dispatch(allTeachers());
    } catch (error) {
      const { errors } = error.response.data;
      dispatch({
        type: TEACHER_FAIL,
        payload: errors,
      });
    }
  };

