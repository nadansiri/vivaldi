//1-import actions-types
//                     ******Comments ******            */
import {
  //Comment // ACTIONS
  SUBMIT_COMMENT,
  GET_COMMENT,
  FAIL_COMMENT,
  //Contact Us // ACTIONS
  SUBMIT_FORM,
  FAIL_FORM,
  GET_FORM,
  //Forum Posts // ACTIONS
  SUBMIT_POST_IN_FORUM,
  FAIL_POST_IN_FORUM,
  GET_POST_IN_FORUM,
  //Activities // ACTIONS
  SUBMIT_ACTIVITY,
  FAIL_ACTIVITY,
  GET_ACTIVITY,
  //Student Projects // ACTIONS
  SUBMIT_STUDENT_PROJECT,
  FAIL_STUDENT_PROJECT,
  GET_STUDENT_PROJECT,
  //News // ACTIONS
  SUBMIT_NEWS,
  FAIL_NEWS,
  GET_NEWS,
  //
  LOAD,

} from "../constants/actionTypes.js";

//2-initial state
const initialState = {
  errors: [],
  //Public Comments
  comment: {},
  PublicCommentsData: [
    { commenter: "username", commentBody: "This is a Comment" },
  ],
  //Contact Us Form
  contactUsForm: {},
  contactUsFormData: [],
  //Posts In Forum
  postForum: {},
  SubmittedPostsData: [],
  //Activities
  activity: {},
  SubmittedActivities: [],
  //Students'Projects
  studentProject: {},
  SubmittedStudentProjects: [],
  //News
  newNewsPiece: {},
  SubmittedNews: [],
  //
  load: false,
};

//3-create the pure function and export it
const publicReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //Public Comments
    case LOAD:
      return { ...state, load: true };
    case SUBMIT_COMMENT:
      return { ...state, load: false, comment: payload.comment };
    case GET_COMMENT:
      return {
        ...state,
        load: false,
        PublicCommentsData: payload.PublicCommentsData,
      };
    case FAIL_COMMENT:
      return { ...state, load: false, errors: payload };
    //Contact Us Form
    case LOAD
:
      return { ...state, load: true };
    case SUBMIT_FORM:
      return {
        ...state,
        load: false,
        contactUsForm: payload.contactUsForm,
      };
    case GET_FORM:
      return {
        ...state,
        load: false,
        contactUsFormData: payload.contactUsFormData,
      };
    case FAIL_FORM:
      return { ...state, load: false, errors: payload };
    //Posts In Forums
    case LOAD:
      return { ...state, load: true };
    case SUBMIT_POST_IN_FORUM:
      return {
        ...state,
        load: false,
        postForum: payload.postForum,
      };
    case GET_POST_IN_FORUM:
      return {
        ...state,
        load: false,
        SubmittedPostsData: payload.SubmittedPostsData,
      };
    case FAIL_POST_IN_FORUM:
      return { ...state, load: false, errors: payload };
    //Activities
    case LOAD:
      return { ...state, load: true };
    case SUBMIT_ACTIVITY:
      return {
        ...state,
        load: false,
        activity: payload.activity,
      };
    case GET_ACTIVITY:
      return {
        ...state,
        load: false,
        SubmittedActivities: payload.SubmittedActivities,
      };
    case FAIL_ACTIVITY:
      return { ...state, load: false, errors: payload };
    //student's :
      return { ...state, load: true };
    case SUBMIT_STUDENT_PROJECT:
      return {
        ...state,
        load: false,
        studentProject: payload.studentProject,
      };
    case GET_STUDENT_PROJECT:
      return {
        ...state,
        load: false,
        SubmittedStudentProjects: payload.SubmittedStudentProjects,
      };
    case FAIL_STUDENT_PROJECT:
      return { ...state, load: false, errors: payload };
    //News
    c:
      return { ...state, load: true };
    case SUBMIT_NEWS:
      return {
        ...state,
        load: false,
        newNewsPiece: payload.newNewsPiece,
      };
    case GET_NEWS:
      return {
        ...state,
        load: false,
        SubmittedNews: payload.SubmittedNews,
      };
    case FAIL_NEWS:
      return { ...state, load: false, errors: payload };
    default:
      return state;
  }
};

export default publicReducer;
