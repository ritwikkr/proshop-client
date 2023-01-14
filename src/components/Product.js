import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../wrapper/ProductWrapper";
import Ratings from "./Ratings";

function Product({ _id, name, image, price, rating, numReviews }) {
  return (
    <Wrapper>
      <Link to={`/productPage/${_id}`}>
        <div className="body">
          <div className="image">
            <img src={image} alt={name} />
          </div>
          <div className="description">
            <div className="title">
              <p>{name}</p>
            </div>
            <div className="rating">
              <Ratings stars={rating} /> <span>{numReviews} reviews</span>
            </div>
            <div className="price">
              <p>$ {price}</p>
            </div>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
}

export default Product;
