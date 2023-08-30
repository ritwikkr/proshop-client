import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Wrapper from "../wrapper/CarouselWrapper";
import { Link } from "react-router-dom";

function DemoCarousel({ products }) {
  const featuredProduct = products.filter(
    (product) => product.featured === true
  );

  return (
    <Wrapper>
      <Carousel>
        {featuredProduct.map((item) => (
          <Link to={`/productPage/${item._id}`}>
            <div className="image">
              <img src={item.image} alt={item.name} />
              <p className="legend">{item.name}</p>
            </div>
          </Link>
        ))}
      </Carousel>
    </Wrapper>
  );
}

export default DemoCarousel;
