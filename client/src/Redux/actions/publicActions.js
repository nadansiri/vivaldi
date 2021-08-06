//import axios
import axios from "axios";
//import action-types
//                     ******Comments ******            */
import {
  //Comment // ACTIONS
  SUBMIT_COMMENT,
  GET_COMMENT,
  LOAD_COMMENT,
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
  SUBMIT_ACTIVITY ,
  LOAD_ACTIVITY ,
  FAIL_ACTIVITY ,
  GET_ACTIVITY ,
  //Student Projects // ACTIONS
  SUBMIT_STUDENT_PROJECT,
  LOAD_STUDENT_PROJECT,
  FAIL_STUDENT_PROJECT,
  GET_STUDENT_PROJECT,
  //News // ACTIONS
  SUBMIT_NEWS,
  LOAD_NEWS,
  FAIL_NEWS,
  GET_NEWS
} from "../constants/actionTypes.js";

//Submit A New Comment
export const submitComment = (newComment) => async (dispatch) => {
  dispatch({
    type: LOAD_COMMENT,
  });
  try {
    let res = await axios.post("/api/public/comment", newComment);
    dispatch({
      type: SUBMIT_COMMENT,
      payload: res.data, //{msg, comment}
    });
    dispatch(allPublicComments());
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_COMMENT,
      payload: errors,
    });
  }
};

//Get All Comments
export const allPublicComments = () => async (dispatch) => {
  dispatch({
    type: LOAD_COMMENT,
  });
  try {
    let res = await axios.get("/api/public/comment");
    dispatch({
      type: GET_COMMENT,
      payload: res.data, //{comment}
    });
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_COMMENT,
      payload: errors,
    });
  }
};
//Delete Comment
export const deleteComments = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`/api/public/comment/${id}`);
    dispatch(allPublicComments());
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_COMMENT,
      payload: errors,
    });
  }
};
//************ CONTACT US***************** */
//Submit A Contact Us Form
export const submitContactUsForm = (newContactUsForm) => async (dispatch) => {
  dispatch({
    type: LOAD_FORM,
  });
  try {
    let res = await axios.post("/api/public/contactus", newContactUsForm);
    dispatch({
      type: SUBMIT_FORM,
      payload: res.data, //{msg, contactUsForm}
    });
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_FORM,
      payload: errors,
    });
  }
};
//Get All Forms /ContactUs
export const allContactUsForms = () => async (dispatch) => {
  dispatch({
    type: LOAD_FORM,
  });
  try {
    let res = await axios.get("/api/public/contactus");
    dispatch({
      type: GET_FORM,
      payload: res.data, //{form}
    });
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_FORM,
      payload: errors,
    });
  }
};
//Delete Form
export const deleteForm = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`/api/public/contactus/${id}`);
    dispatch(allContactUsForms());
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_COMMENT,
      payload: errors,
    });
  }
};
//************ Forum Posts***************** */
//Submit A Post
export const submitPostInForum = (newPost) => async (dispatch) => {
  dispatch({
    type: LOAD_POST_IN_FORUM,
  });
  try {
    let res = await axios.post("/api/public/publicforum", newPost);
    dispatch({
      type: SUBMIT_POST_IN_FORUM,
      payload: res.data, 
    });
    dispatch(allPostsInForum());
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_POST_IN_FORUM,
      payload: errors,
    });
  }
};
//Get All Forms 
export const allPostsInForum = () => async (dispatch) => {
  dispatch({
    type: LOAD_POST_IN_FORUM,
  });
  try {
    let res = await axios.get("/api/public/publicforum");
    dispatch({
      type: GET_POST_IN_FORUM,
      payload: res.data, //{form}
    });
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_POST_IN_FORUM,
      payload: errors,
    });
  }
};
//Delete Post
export const deletePostInForum= (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`/api/public/publicforum/${id}`);
    dispatch(allPostsInForum());
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_POST_IN_FORUM,
      payload: errors,
    });
  }
};
//Edit Post
export const editPostInForum = (id,updatedPost) => async (dispatch) => {
  try {
    let res = await axios.put(`/api/public/publicforum/${id}`,updatedPost);
    dispatch(allPostsInForum());
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_POST_IN_FORUM,
      payload: errors,
    });
  }
};
//************ Activities***************** */
//Submit
export const submitActivity = (newActivity) => async (dispatch) => {
  dispatch({
    type: LOAD_ACTIVITY,
  });
  try {
    let res = await axios.post("/api/public/activities", newActivity);
    dispatch({
      type: SUBMIT_ACTIVITY,
      payload: res.data, 
    });
    dispatch(allActivities());
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_ACTIVITY,
      payload: errors,
    });
  }
};
//Get All
export const allActivities = () => async (dispatch) => {
  dispatch({
    type: LOAD_ACTIVITY,
  });
  try {
    let res = await axios.get("/api/public/activities");
    dispatch({
      type: GET_ACTIVITY,
      payload: res.data, 
    });
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_ACTIVITY,
      payload: errors,
    });
  }
};
//Delete
export const deleteActivity= (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`/api/public/activities/${id}`);
    dispatch(allActivities());
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_ACTIVITY,
      payload: errors,
    });
  }
};
//Edit
export const editActivity = (id,updatedActivity) => async (dispatch) => {
  try {
    let res = await axios.put(`/api/public/activities/${id}`,updatedActivity);
    dispatch(allActivities());
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_ACTIVITY,
      payload: errors,
    });
  }
};
//************ studentprojects ***************** */
//Submit
export const submitStudentProject = (newStudentProject) => async (dispatch) => {
  dispatch({
    type: LOAD_STUDENT_PROJECT,
  });
  try {
    let res = await axios.post("/api/public/studentprojects", newStudentProject);
    dispatch({
      type: SUBMIT_STUDENT_PROJECT,
      payload: res.data, 
    });
    dispatch(allSubmittedStudentProjects());
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_STUDENT_PROJECT,
      payload: errors,
    });
  }
};
//Get All
export const allSubmittedStudentProjects = () => async (dispatch) => {
  dispatch({
    type: LOAD_STUDENT_PROJECT,
  });
  try {
    let res = await axios.get("/api/public/studentprojects");
    dispatch({
      type: GET_STUDENT_PROJECT,
      payload: res.data, 
    });
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_STUDENT_PROJECT,
      payload: errors,
    });
  }
};
//Delete
export const deleteStudentProject= (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`/api/public/studentprojects/${id}`);
    dispatch(allSubmittedStudentProjects());
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_STUDENT_PROJECT,
      payload: errors,
    });
  }
};
//Edit
export const editStudentProject = (id,updatedStudentProject) => async (dispatch) => {
  try {
    let res = await axios.put(`/api/public/studentprojects/${id}`,updatedStudentProject);
    dispatch(allSubmittedStudentProjects());
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_STUDENT_PROJECT,
      payload: errors,
    });
  }
};
//************ News ***************** */
//Submit
export const submitNewNews = (newNews) => async (dispatch) => {
  dispatch({
    type: LOAD_NEWS,
  });
  try {
    let res = await axios.post("/api/public/news", newNews);
    dispatch({
      type: SUBMIT_NEWS,
      payload: res.data, 
    });
    dispatch(allSubmittedNews());
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_NEWS,
      payload: errors,
    });
  }
};
//Get All
export const allSubmittedNews = () => async (dispatch) => {
  dispatch({
    type: LOAD_NEWS,
  });
  try {
    let res = await axios.get("/api/public/news");
    dispatch({
      type: GET_NEWS,
      payload: res.data, 
    });
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_NEWS,
      payload: errors,
    });
  }
};
//Delete
export const deleteSubmittedNews= (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`/api/public/news/${id}`);
    dispatch(allSubmittedNews());
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_NEWS,
      payload: errors,
    });
  }
};
//Edit
export const editNews = (id,updatedNews) => async (dispatch) => {
  try {
    let res = await axios.put(`/api/public/news/${id}`,updatedNews);
    dispatch(allSubmittedNews());
  } catch (error) {
    const { errors } = error.response.data;
    dispatch({
      type: FAIL_NEWS,
      payload: errors,
    });
  }
};