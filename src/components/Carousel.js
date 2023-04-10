import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Wrapper from "../wrapper/CarouselWrapper";
import { Link } from "react-router-dom";

function DemoCarousel() {
  return (
    <Wrapper>
      <Carousel>
        <Link to={"/productPage/63b7c5bb960520d93f84c9b8"}>
          <div className="image" key={1}>
            <img src="/images/airpods.jpg" alt="ps4" />
            <p className="legend">Legend 1</p>
          </div>
        </Link>
        <Link to={"/productPage/63b7c5bb960520d93f84c9bd"}>
          <div className="image">
            <img src="/images/alexa.jpg" alt="ps4 pro" />
            <p className="legend">Legend 2</p>
          </div>
        </Link>
        <Link to={"/productPage/63b7c5bb960520d93f84c9ba"}>
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
