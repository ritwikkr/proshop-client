import React from "react";
// import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Wrapper from "../wrapper/CarouselWrapper";
import { Link } from "react-router-dom";

function DemoCarousel() {
  return (
    <Wrapper>
      <Carousel>
        <Link to={"/productPage/63b3e77e1890f649873c07f7"}>
          <div className="image">
            <img src="/images/airpods.jpg" alt="ps4" />
            <p className="legend">Legend 1</p>
          </div>
        </Link>
        <Link to={"/productPage/63b3e7c37aef7e89c45753ce"}>
          <div className="image">
            <img src="/images/alexa.jpg" alt="ps4 pro" />
            <p className="legend">Legend 2</p>
          </div>
        </Link>
        <Link to={"/productPage/63b3e7ad8a5f725e00648cc0"}>
          <div className="image">
            <img src="/images/camera.jpg" alt="ps4 pro2" />
            <p className="legend">Legend 3</p>
          </div>
        </Link>
      </Carousel>
    </Wrapper>
  );
}

export default DemoCarousel;
// ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));
