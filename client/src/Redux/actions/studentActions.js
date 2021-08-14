//import axios
import axios from "axios"
//import action-types
import {
    REGISTERSTUDENT,
    GETSTUDENT, 
    LOGINSTUDENT, 
    LOADSTUDENT,  
    AUTHSTUDENT,
    LOGOUTSTUDENT,
    STUDENTFAIL,
  GET_ONE_STUDENT} from "../constants/actionTypes.js"

//register the student
export const registerStudent = (newStudent, history) => async(dispatch) => {
    dispatch({
        type: LOADSTUDENT
    })
    try {
        let res = await axios.post('/api/students/register', newStudent)
        dispatch({
            type: REGISTERSTUDENT,
            payload: res.data //{msg, student, student-token}
        })
        history.push("/authstudent")
    } catch (error) {
        const {errors} = error.response.data
        dispatch({
            type: STUDENTFAIL,
            payload: errors
        })
    }
}


//sign in the student
export const loginStudent = (student, history) => async(dispatch) => {
    dispatch({
        type: LOADSTUDENT
    })
    try {
        let res = await axios.post('/api/students/studentlogin', student)
        dispatch({
            type: LOGINSTUDENT,
            payload: res.data //{msg, user, student-token}
        })
        history.push('/authstudent')
    } catch (error) {
        const {errors} = error.response.data
        dispatch({
            type: STUDENTFAIL,
            payload: errors
        })
    }
}

//auth user
export const authedStudent= () => async(dispatch) => {
    dispatch({
        type: LOADSTUDENT
    })
    try {
        const config = {
            headers:{
                "authStudentToken": localStorage.getItem('studentToken')
            }
        }
        let res = await axios.get("/api/students/authstudent", config)
        dispatch({
            type: AUTHSTUDENT,
            payload: res.data 
        })
    } catch (error) {
        const {errors} = error.response.data
        dispatch({
            type: STUDENTFAIL,
            payload: errors
        })
    }
}


//logout user
export const logoutStudent = () => {
    return {
        type: LOGOUTSTUDENT
    }
}
//Get All Students
export const allStudents = () => async (dispatch) => {
  dispatch({
    type: LOADSTUDENT
})
    try {
      let res = await axios.get("/api/students/all");
      dispatch({
        type: GETSTUDENT,
        payload: res.data, //{comment}
      });
    } catch (error) {
      const { errors } = error.response.data;
      dispatch({
        type: STUDENTFAIL,
        payload: errors,
      });
    }
  };
//Delete Student
export const deleteStudents = (id) => async (dispatch) => {
    try {
      let res = await axios.delete(`/api/students/${id}`);
      dispatch(allStudents());
    } catch (error) {
      const { errors } = error.response.data;
      dispatch({
        type: STUDENTFAIL,
        payload: errors,
      });
    }
  };
//Edit Student
export const editStudents = (id,updatedStudent) => async (dispatch) => {
    try {
      let res = await axios.put(`/api/students/${id}`,updatedStudent);
      dispatch(allStudents());
    } catch (error) {
      const { errors } = error.response.data;
      dispatch({
        type: STUDENTFAIL,
        payload: errors,
      });
    }
  };
  //Get one Student
export const OneStudent = (id) => async (dispatch) => {
  dispatch({
    type: LOADSTUDENT
})
    try {
      let res = await axios.get(`/api/students/${id}`);
      dispatch({
        type: GET_ONE_STUDENT,
        payload: res.data, //{comment}
      });
    } catch (error) {
      const { errors } = error.response.data;
      dispatch({
        type: STUDENTFAIL,
        payload: errors,
      });
    }
  };

