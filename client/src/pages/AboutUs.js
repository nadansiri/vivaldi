import { Container, Row, Col, Table } from "react-bootstrap";
import MapContainer from "../components/MapContainer";
import OpeningHours from "../components/OpeningHours";

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <hr />
      <Container className="ContactDetails">
        <Row>
          <Col sm={8}>
            <div className="aboutUsElement">
              <h1>About Us</h1>
              <div className="AboutUsIntro" >
                <h3>VIVALDI_Art_Center</h3>
                <p>
                  {" "}
                  VIVALDI_Art_Center in Bousalem is a microcosm that helps each
                  age group get rid of stress and routine thanks to the
                  diversity of clubs it hosts, which are suitable for all ages.{" "}
                </p>
                <p>
                  We have: artistic, linguistic, technological and sports clubs
                  run by specialists in their fields.{" "}
                </p>
                <p>
                  Here we assure you of a full compliance with sanitary
                  protocol!{" "}
                </p>
                <p>
                  Our space is located in the center of the city of Bousalem,
                  equipped with the latest teaching aids and musical instruments
                  suitable for all ages.
                </p>
                <p>
                  Let your mind be at ease! Your child is being supervised,
                  educated and discovering new horizons.
                </p>
                <p>
                  "Playing isn't just fun, it's also the best way for young
                  children to learn. By playing, children can practise all the
                  skills they'll need as they grow up. And this is what we
                  always strive for with our center, achieving a child's
                  emotional balance and a high quality of learning ❤❤❤"
                </p>
                <hr />
                <h5>For reservations please call: 52658968 / 97056800</h5>
                <hr/>
              </div>

              <img
                src="/images/aboutUs.jpg"
                alt="affiche vivaldi"
                width="75%"
              />
            </div>
            <div className="aboutUsElement">
              <h3>A Word From Our Director</h3>
              <hr />
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FCentre.d.art.vivaldi.bousalem%2Fvideos%2F1343287922691275%2F&show_text=false&width=476&t=0"
                width="476"
                height="476"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen="true"
              ></iframe>
            </div>
          </Col>
          <Col sm={4}>
            <div className="aboutUsElement">
              <div style={{ textAlign: "center" }}>
                <img src="/images/logoVIVALDI.png" alt="logo" />
                <div>
                  <h5>
                    <b>CENTRE D'ART VIVALDI</b>
                  </h5>
                  <p>15 Rue Tayeb Lemhiri, Boussalem, 8170</p>
                  <p>TEL: 52 658 968 / 97 056 800</p>
                  <hr />
                </div>
              </div>
              <MapContainer />
            </div>
            <OpeningHours/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
