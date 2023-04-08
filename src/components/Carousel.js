import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Wrapper from "../wrapper/CarouselWrapper";
import { Link } from "react-router-dom";

function DemoCarousel() {
  return (
    <Wrapper>
      <Carousel>
        <Link to={"/productPage/642a6a37a2a8cd61fcf11f73"}>
          <div className="image" key={1}>
            <img src="/images/airpods.jpg" alt="ps4" />
            <p className="legend">Legend 1</p>
          </div>
        </Link>
        <Link to={"/productPage/642a6b27a2a8cd61fcf11f78"}>
          <div className="image">
            <img src="/images/alexa.jpg" alt="ps4 pro" />
            <p className="legend">Legend 2</p>
          </div>
        </Link>
        <Link to={"/productPage/642a6afba2a8cd61fcf11f75"}>
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
