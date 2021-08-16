import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ANewCarousel = () => {
  return (
    <div>
      <Carousel centerMode="true" centerSlidePercentage="50">
        <div>
          <img  src="/images/NewCarousel/Diapositive1.JPG" />
          <p className="legend">Join Us! Join our talented team!</p>
        </div>
        <div>
          <img  src="/images/NewCarousel/Diapositive2.JPG" />
          <p className="legend">Join Us! Join our talented team!</p>
        </div>
        <div>
          <img  src="/images/NewCarousel/Diapositive3.JPG" />
          <p className="legend">Join Us! Join our talented team!</p>
        </div>
        <div>
          <img  src="/images/NewCarousel/Diapositive4.JPG" />
          <p className="legend">Join Us! Join our talented team!</p>
        </div>
        <div>
          <img  src="/images/NewCarousel/Diapositive5.JPG" />
          <p className="legend">Join Us! Join our talented team!</p>
        </div>
        <div>
          <img  src="/images/NewCarousel/Diapositive6.JPG" />
          <p className="legend">Join Us! Join our talented team!</p>
        </div>
        <div>
          <img  src="/images/NewCarousel/Diapositive7.JPG" />
          <p className="legend">Join Us! Join our talented team!</p>
        </div>
        <div>
          <img  src="/images/NewCarousel/Diapositive8.JPG" />
          <p className="legend">Join Us! Join our talented team!</p>
        </div>
        <div>
          <img  src="/images/NewCarousel/Diapositive9.JPG" />
          <p className="legend">Join Us! Join our talented team!</p>
        </div>
        <div>
          <img  src="/images/NewCarousel/Diapositive10.JPG" />
          <p className="legend">Join Us! Join our talented team!</p>
        </div>
        <div>
          <img  src="/images/NewCarousel/Diapositive11.JPG" />
          <p className="legend">Join Us! Join our talented team!</p>
        </div>
        <div>
          <img  src="/images/NewCarousel/Diapositive12.JPG" />
          <p className="legend">Join Us! Join our talented team!</p>
        </div>
        <div>
          <img  src="/images/NewCarousel/Diapositive13.JPG" />
          <p className="legend">Join Us! Join our talented team!</p>
        </div>
      </Carousel>
    </div>
  );
};

export default ANewCarousel;
