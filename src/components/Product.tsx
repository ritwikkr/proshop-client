import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../wrapper/ProductWrapper";
import Ratings from "./Ratings";
import { RatingsAndReviews } from "../interface/store/slice/productTypes";

function Product({
  _id,
  name,
  image,
  price,
  ratingsAndReviews,
}: {
  _id: string;
  name: string;
  image: string;
  price: number;
  ratingsAndReviews: RatingsAndReviews;
}) {
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
              <Ratings stars={ratingsAndReviews.totalRatings} />
              <span>{ratingsAndReviews.totalReviews} reviews</span>
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
