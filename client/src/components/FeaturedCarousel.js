import { Carousel } from "react-bootstrap";

const FeaturedCarousel = () => {
  return (
    <div className="FeaturedCarousel">
      <Carousel variant="dark"  >
        <Carousel.Item className="CarouselItem">
          <img
            className="d-block w-100"
            src="/images/elementsCarousel/Diapositive1.JPG"
            alt="First slide"
          />
          <Carousel.Caption className="CarouselCaption">
            <h2>Welcome To VIVALDI ART CENTER</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="CarouselItem">
          <img
            className="d-block w-100"
            src="/images/elementsCarousel/Diapositive2.JPG"
            alt="Second slide"
          />
          <Carousel.Caption className="CarouselCaption">
            <h2>Music Club</h2>
            <p>Join Us! Join our talented team!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="CarouselItem">
          <img
            className="d-block w-100"
            src="/images/elementsCarousel/Diapositive3.JPG"
            alt="Third slide"
          />
          <Carousel.Caption className="CarouselCaption">
            <h2>Sports Club</h2>
            <p>Join Us! Join our talented team!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="CarouselItem">
          <img
            className="d-block w-100"
            src="/images/elementsCarousel/Diapositive4.JPG"
            alt="Third slide"
          />
          <Carousel.Caption className="CarouselCaption">
            <h2>Art Club</h2>
            <p>Join us! Join our talented team!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      ;
    </div>
  );
};

export default FeaturedCarousel;
