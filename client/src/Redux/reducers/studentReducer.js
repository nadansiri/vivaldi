//1-import actions-types
import {
  LOADSTUDENT,
  GETSTUDENT,
  REGISTERSTUDENT,
  LOGINSTUDENT,
  STUDENTFAIL,
  AUTHSTUDENT,
  LOGOUTSTUDENT,
  GET_ONE_STUDENT
  
} from "../constants/actionTypes";

//2-initial state
const initialState = {
  foundStudent:{},
  student: {},
  errors: [],
  loadStudent: false,
  isAuthStudent: false,
  StudentsData: [{_id:"id",firstName:"firstName",lastName:"lastName",club:"club"}],
};

//3-create the pure function and export it
const studentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADSTUDENT:
      return { ...state, loadStudent: true };
    case REGISTERSTUDENT:
    case LOGINSTUDENT:
      localStorage.setItem("studentToken", payload.studentToken);
      return {
        ...state,
        loadStudent: false,
        isAuthStudent: true,
        student: payload.student,
      };
    case AUTHSTUDENT:
      return {
        ...state,
        loadStudent: false,
        isAuthStudent: true,
        student: payload.student,
      };
    case GETSTUDENT:
      return {
        ...state,
        loadStudent: false,
        StudentsData: payload.StudentsData,
      };
      case GET_ONE_STUDENT:
      return {
        ...state,
        loadStudent: false,
        foundStudent: payload.foundStudent,
      };
    case STUDENTFAIL:
      return {
        ...state,
        loadStudent: false,
        isAuthStudent: false,
        errors: payload,
      };
    case LOGOUTSTUDENT:
      localStorage.removeItem("studentToken");
      return {
        ...state,
        student: {},
        errors: [],
        loadStudent: false,
        isAuthStudent: false,
      };
    default:
      return state;
  }
};

export default studentReducer;
