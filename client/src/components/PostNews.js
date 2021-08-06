import React, { useState, useEffect } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PublicComment from "../pages/PublicComment";
import {
  submitNewNews,
  allSubmittedNews,
} from "../Redux/actions/publicActions";
import PostNewsDelete from "./MyClubActivityDelete";

import MyClubActivityDelete from "./MyClubActivityDelete";
import MyClubActivityEdit from "./MyClubActivityEdit";
import PostNewsEdit from "./PostNewsEdit";
import PostStudentProject from "./PostStudentProject";

const PostNews = (props) => {
  const [news, setNews] = useState({});

  const handleChange = (e) => {
    setNews({ ...news, [e.target.name]: e.target.value });
  };

  const errors = useSelector((state) => state.publicReducer.errors);
  const teacher = useSelector((state) => state.teacherReducer.teacher);
  const dispatch = useDispatch();

  const getNews = () => dispatch(allSubmittedNews());
  const SubmittedNews = useSelector(
    (state) => state.publicReducer.SubmittedNews
  );
  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <hr />
      {teacher.role === "ADMIN" ? (
        <div className="PostActivity">
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="title"
                name="title"
                placeholder="Title"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="newsBody"
                name="newsBody"
                as="textarea"
                rows={3}
                placeholder="The News"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
          {errors && errors.map((el) => <p> {el.msg} </p>)}
          <Button
            className="CommentBtn"
            variant="info"
            onClick={() => dispatch(submitNewNews(news))}
          >
            Submit
          </Button>
        </div>
      ) : null}
      <hr />

      <div className="AllForms">
        <h4>**News**</h4>
        <ListGroup>
          {SubmittedNews.map((el) => (
            <div>
              <ListGroup.Item key={el._id} className="SingleForm">
                <h5>
                  <b>Title:</b> {el.title}
                </h5>
                <hr />
                <h5>{el.newsBody}</h5>

                <h6>{el.updatedAt}</h6>
                {teacher.role === "ADMIN" ? (
                  <div className="actionBtn2">
                    <PostNewsDelete id={el._id} />
                    <PostNewsEdit oldNews={el} id={el._id} />
                  </div>
                ) : null}
              </ListGroup.Item>
            </div>
          ))}
        </ListGroup>
      </div>
      <PublicComment />
    </div>
  );
};

export default PostNews;
