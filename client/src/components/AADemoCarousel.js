import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const AADemoCarousel = () => {
    return (
        <div>
           <Carousel>
                <div>
                    <img src="/images/elementsCarousel/Diapositive1.JPG" />
             <p className="legend">Join Us! Join our talented team!</p>
                </div>
                <div>
                    <img src="/images/elementsCarousel/Diapositive2.JPG" />
                    <p className="legend">Join Us! Join our talented team!</p>
                </div>
                <div>
                    <img src="/images/elementsCarousel/Diapositive3.JPG" />
                    <p className="legend">Join Us! Join our talented team!</p>
                </div>
                <div>
                    <img src="/images/elementsCarousel/Diapositive4.JPG" />
                    <p className="legend">Join Us! Join our talented team!</p>
                </div>
            </Carousel> 
        </div>
    )
}

export default AADemoCarousel


//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>