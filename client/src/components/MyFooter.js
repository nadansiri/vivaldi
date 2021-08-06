import { Link } from "react-router-dom";

const MyFooter = () => {
  return (
    <>
      <hr />
      <div className="MyFooter">
        <div className="FooterContact">
          <img src="/images/logoVIVALDI.png" alt="logo" />
          <div className="FooterContact1">
            <h6>
              <b>CENTRE D'ART VIVALDI</b>
            </h6>
            <h5>15 Rue Tayeb Lemhiri, Boussalem, 8170</h5>
            <h5>TEL: 52 658 968 / 97 056 800</h5>
          </div>
        </div>
        <div className="FooterMenu">
          <h5>
            <b>Menu</b>
          </h5>
          <Link to="/">
            <h5>Home</h5>
          </Link>
          <Link to="/aboutus">
            <h5>About Us</h5>
          </Link>
          <Link to="/events">
            <h5>Events</h5>
          </Link>
        </div>
        <div className="FooterSocialMedia">
          <h5>
            <b>Follow us on</b>
          </h5>
          <a href="https://www.facebook.com/Centre.d.art.vivaldi.bousalem/"><img
            src="https://lh3.googleusercontent.com/proxy/2n-GWVNdbJTKgGyYEb06F7iWaDgnZ6xZRSxWUBp523gddRTFIv-s7BEtBmu_4uI3RD-N5ntOqMUVkn3ZnIItfCAH72NrqLnoqomiMMWUAmUBHzV_0XjRGN3MmM3VBuBTyO8N93LbtM7kh5vllU4hoK-1QOrN-Q3bXTruhsb_D3Nk40E7hRQuLSzP8qrE6bu2Hm0qKilpmboyRUftNavFTHc"
            width="30px"
            alt="logofb"
          /></a>
          <Link to="/contactus">
            <h5>
              <b>Contact Us</b>
            </h5>
          </Link>
          <h5>Terms and Conditions</h5>
        </div>
      </div>
      <hr />
      <div className="FooterP">
        <b>Copyirght © 2021, All rigths reserved ART CENTER VIVALDI</b>
      </div>
    </>
  );
};

export default MyFooter;
