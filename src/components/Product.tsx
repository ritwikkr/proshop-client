import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../wrapper/ProductWrapper";
import Ratings from "./Ratings";
import { ProductType } from "../interface/store/slice/productTypes";
import Wishlist from "./Wishlist";
import AddToCartButton from "../utilities/AddToCartButton";

function Product({ item }: { item: ProductType }) {
  return (
    <Wrapper>
      <Link to={`/productPage/${item._id}`}>
        <div className="body">
          <Wishlist productId={item._id} />
          <div className="image">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="description">
            <div className="title">
              <p>{item.name}</p>
            </div>
            <div className="rating">
              <Ratings stars={item.ratingsAndReviews.totalRatings} />
              <span>{item.ratingsAndReviews.totalReviews} reviews</span>
            </div>
            <div className="price">
              <p>$ {item.price}</p>
            </div>
          </div>
        </div>
      </Link>
      {window.location.pathname === "/wishlist" && (
        <div className="add-to-cart">
          <AddToCartButton data={item} />
        </div>
      )}
    </Wrapper>
  );
}

export default Product;
