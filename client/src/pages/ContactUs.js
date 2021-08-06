import React, { useState, useEffect } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  submitContactUsForm,
  allContactUsForms,
} from "../Redux/actions/publicActions";
import DeleteForm from "../components/DeleteForm";

const ContactUs = (props) => {
  const [contactUsForm, setContactUsForm] = useState({});

  const handleChange = (e) => {
    setContactUsForm({ ...contactUsForm, [e.target.name]: e.target.value });
  };
  const errors = useSelector((state) => state.publicReducer.errors);
  const dispatch = useDispatch();

  const getForms = () => dispatch(allContactUsForms());
  const contactUsFormData = useSelector(
    (state) => state.publicReducer.contactUsFormData
  );
  useEffect(() => {
    getForms();
  }, contactUsFormData);

  return (
    <div>
      <h1>Contact Us!</h1>

      <div className="ContactUs">
        <div className="Contact">
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="firstName"
                name="firstName"
                placeholder="First name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="lastName"
                name="lastName"
                placeholder="Last name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>How did you hear about us?</Form.Label>
              <Form.Control
                type="heardFrom"
                name="heardFrom"
                as="select"
                onChange={handleChange}
              >
                <option value="Search Engine">Search Engine</option>
                <option value="Social Media">Social Media</option>
                <option value="Radio">Radio</option>
                <option value="TV">TV</option>
                <option value="Print">Print</option>
                <option value="Word of mouth">Word of mouth</option>
                <option value="Other">Other ______________________ </option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                type="ifOther"
                name="ifOther"
                as="textarea"
                placeholder="If you answered other previously, can you specify how?"
                rows={3}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                type="sugg"
                name="sugg"
                as="textarea"
                placeholder="Any suggestions?"
                rows={3}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
          {errors && errors.map((el) => <p> {el.msg} </p>)}
          <Button
            className="CommentBtn"
            variant="info"
            onClick={() => dispatch(submitContactUsForm(contactUsForm))}
          >
            Submit Form
          </Button>
        </div>
        <img
          src="https://cdn.dribbble.com/users/1484145/screenshots/14190807/contact_us_4x.png"
          alt="ContactUs"
          width="60%"
        />
      </div>
      <hr />
      {
        //Render the Forms if Admin
        props.isAdmin === "ADMIN" ? (
          <div className="AllForms">
            <ListGroup>
              {contactUsFormData.map((el) => (
                <ListGroup.Item key={el._id} className="SingleForm">
                  <h5>
                    <b>
                      {el.firstName} {el.lastName} :
                    </b>
                  </h5>{" "}
                  <h5>
                    <b>Email:</b> {el.email}
                  </h5>
                  <h5>
                    <b>Heard About Us From:</b> {el.heardFrom}
                  </h5>
                  <h5>
                    <b>If Other:</b> {el.ifOther}
                  </h5>
                  <h5>
                    <b>Suggestions:</b> {el.sugg}
                  </h5>
                  <h6>{el.updatedAt}</h6>
                  <DeleteForm id={el._id} />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        ) : (
          null
        )
      }
    </div>
  );
};

export default ContactUs;
