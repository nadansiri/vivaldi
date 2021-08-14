import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  ListGroup,
  Container,
  Row,
  Col,
  Card,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PublicComment from "../pages/PublicComment";
import {
  submitNewNews,
  allSubmittedNews,
} from "../Redux/actions/publicActions";
import MapContainer from "./MapContainer";
import PostNewsDelete from "./PostNewsDelete";

import PostNewsEdit from "./PostNewsEdit";

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
    <div className="NewsPage">
      {teacher.role === "ADMIN" ? (
        <div className="PostNews">
          <hr />
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
                type="link"
                name="newsPhotoURL"
                placeholder="Photo URL"
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
          <hr />
        </div>
      ) : null}

      <div className="AllForms">
        
        <hr />
        <Container className="ContactDetails">
          <Row>
            <Col sm={3}>
              <div className="FbNewsItems">
                <iframe
                  className="NewsItemFb"
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCentre.d.art.vivaldi.bousalem%2Fposts%2F2387068428092656&show_text=true&width=500"
                  width="100%"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
                <iframe
                  className="NewsItemFb"
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCentre.d.art.vivaldi.bousalem%2Fposts%2F2385356084930557&show_text=true&width=500"
                  width="100%"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
                <iframe
                  className="NewsItemFb"
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCentre.d.art.vivaldi.bousalem%2Fposts%2F2373553229444176&show_text=true&width=500"
                  width="100%"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
                <Card className="NewsItemFb" style={{ width: "100%" }}>
                  <Card.Img variant="top" /*src={el.newsPhotoURL}*/ />
                  <Card.Body>
                    <Card.Title>عازفات نادي الموسيقى سنة اولى</Card.Title>
                    <Card.Text>
                      <p>
                        في فترة زمنية قصيرة جدا و بنسق تدريب جدي استطاعت عازفات
                        نادي الموسيقى سنة اولى الفوج 2
                        #بمركز_الفن_vivaldi_ببوسالم من عزف مقطع من السمفونية
                        عدد9 للموسيقار العالمي بيتهوفن
                      </p>
                    </Card.Text>
                    <iframe
                      src="https://www.facebook.com/plugins/video.php?height=253&href=https%3A%2F%2Fwww.facebook.com%2FCentre.d.art.vivaldi.bousalem%2Fvideos%2F3932305296838001%2F&show_text=true&width=560&t=0"
                      width="80%"
                      height="368"
                      scrolling="no"
                      frameborder="0"
                      allowfullscreen="true"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen="true"
                    />
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col sm={5}>
              {/*<ListGroup>*/}
              {SubmittedNews.map((el) => (
                <div className="NewsItem">
                  {/*<ListGroup.Item key={el._id} className="SingleForm">
                <h5>
                  <b>Title:</b> {el.title}
                </h5>
                <hr />
                <img src={el.newsPhotoURL} width="100%"/>
                <h5>{el.newsBody}</h5>

                <h6>{el.updatedAt}</h6>
                {teacher.role === "ADMIN" ? (
                  <div className="actionBtn2">
                    <PostNewsDelete id={el._id} />
                    <PostNewsEdit oldNews={el} id={el._id} />
                  </div>
                ) : null}
              </ListGroup.Item>*/}
                  <Card style={{ width: "100%" }}>
                    <Card.Img variant="top" src={el.newsPhotoURL} />
                    <Card.Body>
                      <Card.Title>{el.title}</Card.Title>
                      <Card.Text>{el.newsBody}</Card.Text>
                      {teacher.role === "ADMIN" ? (
                        <div className="actionBtn2">
                          <PostNewsDelete id={el._id} />
                          <PostNewsEdit oldNews={el} id={el._id} />
                        </div>
                      ) : null}{" "}
                    </Card.Body>
                  </Card>
                </div>
              ))}
              {/*</ListGroup>*/}
            </Col>
            <Col sm={4}>
              <MapContainer />
              <div className="profileElement">
              <h4 style={{textAlign:"center", marginTop:"20px"}}>Opening Hours</h4>
                <Table responsive="sm">
                  
                  <tbody>
                    <tr>
                      <td>monday</td>
                      <td>
                        <p>09:00 - 12:00</p>
                        <p>15:00 - 18:00</p>
                      </td>
                    </tr>
                    <tr>
                      <td>tuesday</td>
                      <td>
                        <p>09:00 - 12:00</p>
                        <p>15:00 - 18:00</p>
                      </td>
                    </tr>
                    <tr>
                      <td>wednesday</td>
                      <td>
                        <p>09:00 - 12:00</p>
                        <p>15:00 - 18:00</p>
                      </td>
                    </tr>
                    <tr>
                      <td>thirsday</td>
                      <td>
                        <p>09:00 - 12:00</p>
                        <p>15:00 - 18:00</p>
                      </td>
                    </tr>
                    <tr>
                      <td>friday</td>
                      <td>
                        <p>09:00 - 12:00</p>
                        <p>15:00 - 18:00</p>
                      </td>
                    </tr>
                    <tr>
                      <td>saturday</td>
                      <td>
                        <p>09:00 - 12:00</p>
                        <p>15:00 - 18:00</p>
                      </td>
                    </tr>
                    <tr>
                      <td>sunday</td>
                      <td>
                        <p>09:00 - 18:00</p>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <PublicComment />
    </div>
  );
};

export default PostNews;
