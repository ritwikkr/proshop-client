import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Ratings from "../components/Ratings";
import Reviews from "../components/Reviews";
import Wrapper from "../wrapper/ProductPageWrapper";
import { fetchProduct } from "../store/slices/singleProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import ProductPagePreLoader from "../components/ProductPagePreLoader";
import { RootState } from "../interface/store/storeTypes";
import { AppDispatch } from "../store/store";
import Loading from "../components/Loading";
import Wishlist from "../components/Wishlist";

function ProductPage() {
  // Component State
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading } = useSelector((state: RootState) => state.product);

  // Fetched the product from back-end through product ID
  const { id } = useParams();
  useEffect(() => {
    if (id) dispatch(fetchProduct(id));
  }, [dispatch, id]);

  // Loading
  if (isLoading) {
    return <ProductPagePreLoader />;
  }
  if (!data) {
    return <Loading />;
  }

  const { name, image, price, description, countInStock, ratingsAndReviews } =
    data;

  // Product Quantity
  function increaseQty() {
    if (data && qty >= data.countInStock) {
      return;
    }
    setQty(qty + 1);
  }

  function decreaseQty() {
    if (qty <= 1) {
      return;
    }
    setQty(qty - 1);
  }

  // Add to Cart Function
  function addToCartHandler() {
    dispatch(addToCart({ ...data, qty }));
    setQty(1);
    toast.success("Item added to cart", { autoClose: 1000, draggable: true });
  }

  return (
    <Wrapper>
      <div className="back-btn">
        <Link to={"/"}>
          <button>go back</button>
        </Link>
      </div>
      <div className="dashboard">
        <div className="image">
          <img src={image} alt={name} />
          {id && <Wishlist productId={id} />}
        </div>
        <div className="prod-details">
          <div className="title">{name}</div>
          <hr />
          <div className="rating">
            <Ratings stars={ratingsAndReviews.totalRatings} />
            <span>{ratingsAndReviews.totalReviews} reviews</span>
          </div>
          <hr />
          <div className="price">
            <p>Price: ${price}</p>
          </div>
          <hr />
          <div className="desc">
            <p>Description: {description}</p>
          </div>
        </div>
        <div className="price-box">
          <div className="price">
            <p>Price:</p>
            <p>$ {price}</p>
          </div>
          <div className="status">
            <p>Status:</p>
            {countInStock > 0 ? (
              <p className="instock">In Stock</p>
            ) : (
              <p className="outofstock">Out of Stock</p>
            )}
          </div>
          <div className="qty">
            <p>Qty</p>
            <div className="change-qty">
              <button onClick={() => decreaseQty()}>-</button>
              <input type="number" readOnly value={qty} />
              <button onClick={() => increaseQty()}>+</button>
            </div>
          </div>
          <div className="btn">
            <button
              onClick={() => addToCartHandler()}
              disabled={countInStock - qty + 1 < 1}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="reviews">
        <Reviews reviews={ratingsAndReviews.ratingAndReview} />
      </div>
    </Wrapper>
  );
}

export default ProductPage;
