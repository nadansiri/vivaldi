import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <div className="MyFooter">
      <Container>
        <Row className="MenuFooter">
          <Col className="FooterL2">
            <Link style={{ color: "white" }} to="/">
              Home
            </Link>
          </Col>
          <Col className="FooterL2">
            <Link style={{ color: "white" }} to="/aboutus">
              About Us
            </Link>
          </Col>
          <Col className="FooterL2">
            <Link style={{ color: "white" }} to="/events">
              Events
            </Link>
          </Col>
          <Col className="FooterL2">
            <Link style={{ color: "white" }} to="/contactus">
              Contact Us
            </Link>
          </Col>
          <hr/>
        </Row>
        <Row>
          <div >
            <Col className="FooterL2">
              <img src="/images/logoVIVALDI.png" alt="logo" />
            </Col>
            <Col className="FooterL2">
              <h6>CENTRE D'ART VIVALDI</h6>
              <p>15 Rue Tayeb Lemhiri, Boussalem, 8170</p>
              <p>TEL: 52 658 968 / 97 056 800</p>
            </Col>
            <Col className="FooterL2">
              <h6>Follow us on:</h6>
              <a href="https://www.facebook.com/Centre.d.art.vivaldi.bousalem/">
                <img
                  src="http://assets.stickpng.com/thumbs/584ac2d03ac3a570f94a666d.png"
                  width="30px"
                  alt="logofb"
                />
              </a>
            </Col>
          </div>
        </Row>

        <Row className="FooterL2"><p>Copyirght © 2021, All rigths reserved ART CENTER VIVALDI</p></Row>
      </Container>
      {/*
      <Container>
        <Row>
          <Col className="FooterL2" sm={5}>
            <div className="FooterContact">
            <Container>
        <Row>
          <Col className="FooterL2" sm={4}>
              <img src="/images/logoVIVALDI.png" alt="logo" />
              </Col>
              <Col className="FooterL2" sm={8}>
              <div className="FooterContact1">
                <h6>
                  <b>CENTRE D'ART VIVALDI</b>
                </h6>
                <hr/>
                <h6>15 Rue Tayeb Lemhiri, Boussalem, 8170</h6>
                <h6>TEL: 52 658 968 / 97 056 800</h6>
              </div>
              </Col>
              </Row>
              </Container>
            </div>
          </Col>
          <Col className="FooterL2" sm={3}>
            <div className="FooterMenu">
              <h6>
                <b>Menu</b>
              </h6>
              <Link style={{color:"white"}} to="/">
                <h6>Home</h6>
              </Link>
              <Link style={{color:"white"}} to="/aboutus">
                <h6>About Us</h6>
              </Link>
              <Link style={{color:"white"}} to="/events">
                <h6>Events</h6>
              </Link>
            </div>
          </Col>
          <Col className="FooterL2" sm={3}>
            <div className="FooterSocialMedia">
              <h6>
                <b>Follow us on</b>
              </h6>
              <a href="https://www.facebook.com/Centre.d.art.vivaldi.bousalem/">
                <img
                  src="http://assets.stickpng.com/thumbs/584ac2d03ac3a570f94a666d.png"
                  width="30px"
                  alt="logofb"
                />
              </a>
              <Link style={{color:"white"}} to="/contactus">
                <h6>
                  <b>Contact Us</b>
                </h6>
              </Link>
              <h6>Terms and Conditions</h6>
            </div>
          </Col>
        </Row>
        <Row>
          <hr />
          <div className="FooterP">
            <b>Copyirght © 2021, All rigths reserved ART CENTER VIVALDI</b>
          </div>
        </Row>
      </Container>*/}
    </div>
  );
};

export default MyFooter;
