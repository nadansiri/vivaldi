//1-import actions-types
//                     ******Comments ******            */
import {
  //Comment // ACTIONS
  SUBMIT_COMMENT,
  EDIT_COMMENT,
  GET_COMMENT,
  LOAD_COMMENT,
  DELETE_COMMENT,
  FAIL_COMMENT,
  //Contact Us // ACTIONS
  SUBMIT_FORM,
  LOAD_FORM,
  FAIL_FORM,
  GET_FORM,
  //Forum Posts // ACTIONS
  SUBMIT_POST_IN_FORUM,
  LOAD_POST_IN_FORUM,
  FAIL_POST_IN_FORUM,
  GET_POST_IN_FORUM,
  //Activities // ACTIONS
  SUBMIT_ACTIVITY,
  LOAD_ACTIVITY,
  FAIL_ACTIVITY,
  GET_ACTIVITY,
  //Student Projects // ACTIONS
  SUBMIT_STUDENT_PROJECT,
  LOAD_STUDENT_PROJECT,
  FAIL_STUDENT_PROJECT,
  GET_STUDENT_PROJECT,
  //News // ACTIONS
  SUBMIT_NEWS,
  LOAD_NEWS,
  FAIL_NEWS,
  GET_NEWS,
} from "../constants/actionTypes.js";

//2-initial state
const initialState = {
  errors: [],
  //Public Comments
  comment: {},
  PublicCommentsData: [
    { commenter: "username", commentBody: "This is a Comment" },
  ],
  loadComment: false,
  //Contact Us Form
  contactUsForm: {},
  loadContactUsForm: false,
  contactUsFormData: [],
  //Posts In Forum
  postForum: {},
  loadPost: false,
  SubmittedPostsData: [],
  //Activities
  activity: {},
  loadActivity: false,
  SubmittedActivities: [],
  //Students'Projects
  studentProject: {},
  loadStudentProject: false,
  SubmittedStudentProjects: [],
  //News
  newNewsPiece: {},
  loadNews: false,
  SubmittedNews: [],
};

//3-create the pure function and export it
const publicReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //Public Comments
    case LOAD_COMMENT:
      return { ...state, loadComment: true };
    case SUBMIT_COMMENT:
      return { ...state, loadComment: false, comment: payload.comment };
    case GET_COMMENT:
      return {
        ...state,
        loadComment: false,
        PublicCommentsData: payload.PublicCommentsData,
      };
    case FAIL_COMMENT:
      return { ...state, loadComment: false, errors: payload };
    //Contact Us Form
    case LOAD_FORM:
      return { ...state, loadContactUsForm: true };
    case SUBMIT_FORM:
      return {
        ...state,
        loadContactUsForm: false,
        contactUsForm: payload.contactUsForm,
      };
    case GET_FORM:
      return {
        ...state,
        loadContactUsForm: false,
        contactUsFormData: payload.contactUsFormData,
      };
    case FAIL_FORM:
      return { ...state, loadContactUsForm: false, errors: payload };
    //Posts In Forums
    case LOAD_POST_IN_FORUM:
      return { ...state, loadPost: true };
    case SUBMIT_POST_IN_FORUM:
      return {
        ...state,
        loadPost: false,
        postForum: payload.postForum,
      };
    case GET_POST_IN_FORUM:
      return {
        ...state,
        loadPost: false,
        SubmittedPostsData: payload.SubmittedPostsData,
      };
    case FAIL_POST_IN_FORUM:
      return { ...state, loadPost: false, errors: payload };
    //Activities
    case LOAD_ACTIVITY:
      return { ...state, loadActivity: true };
    case SUBMIT_ACTIVITY:
      return {
        ...state,
        loadActivity: false,
        activity: payload.activity,
      };
    case GET_ACTIVITY:
      return {
        ...state,
        loadActivity: false,
        SubmittedActivities: payload.SubmittedActivities,
      };
    case FAIL_ACTIVITY:
      return { ...state, loadActivity: false, errors: payload };
    //student's Project
    case LOAD_STUDENT_PROJECT:
      return { ...state, loadStudentProject: true };
    case SUBMIT_STUDENT_PROJECT:
      return {
        ...state,
        loadStudentProject: false,
        studentProject: payload.studentProject,
      };
    case GET_STUDENT_PROJECT:
      return {
        ...state,
        loadStudentProject: false,
        SubmittedStudentProjects: payload.SubmittedStudentProjects,
      };
    case FAIL_STUDENT_PROJECT:
      return { ...state, loadStudentProject: false, errors: payload };
    //News
    case LOAD_NEWS:
      return { ...state, loadNews: true };
    case SUBMIT_NEWS:
      return {
        ...state,
        loadNews: false,
        newNewsPiece: payload.newNewsPiece,
      };
    case GET_NEWS:
      return {
        ...state,
        loadNews: false,
        SubmittedNews: payload.SubmittedNews,
      };
    case FAIL_NEWS:
      return { ...state, loadNews: false, errors: payload };
    default:
      return state;
  }
};

export default publicReducer;
