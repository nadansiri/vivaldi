//1-import actions-types
import {
  REGISTER_TEACHER,
  LOGIN_TEACHER,
  GET_TEACHER,
  LOAD_TEACHER,
  AUTH_TEACHER,
  LOGOUT_TEACHER,
  TEACHER_FAIL,
} from "../constants/actionTypes.js";

//2-initial state
const initialState = {
  teacher: {},
  errors: [],
  loadTeacher: false,
  isAuthTeacher: false,
  TeachersData: [
    { _id: "id", firstName: "firstName", lastName: "lastName", club: "club" },
  ],
};

//3-create the pure function and export it
const teacherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_TEACHER:
      return { ...state, loadTeacher: true };
    case REGISTER_TEACHER:
    case LOGIN_TEACHER:
      localStorage.setItem("teacherToken", payload.teacherToken);
      return {
        ...state,
        loadTeacher: false,
        isAuthTeacher: true,
        teacher: payload.teacher,
      };
    case GET_TEACHER:
      localStorage.setItem("teacherToken", payload.teacherToken);
      return {
        ...state,
        loadTeacher: false,
        isAuthTeacher: true,
        TeachersData: payload.TeachersData,
      };
    case AUTH_TEACHER:
      return {
        ...state,
        loadTeacher: false,
        isAuthTeacher: true,
        teacher: payload.teacher,
      };
    case TEACHER_FAIL:
      return {
        ...state,
        loadTeacher: false,
        isAuthTeacher: false,
        errors: payload,
      };
    case LOGOUT_TEACHER:
      localStorage.removeItem("teacherToken");
      return {
        ...state,
        teacher: {},
        errors: [],
        loadTeacher: false,
        isAuthTeacher: false,
      };
    default:
      return state;
  }
};

export default teacherReducer;
