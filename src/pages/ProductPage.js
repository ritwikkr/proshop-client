import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Ratings from "../components/Ratings";
import Reviews from "../components/Reviews";
import Wrapper from "../wrapper/ProductPageWrapper";
import { fetchProduct } from "../store/slices/singleProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import Alert from "../components/Alert";
import { togglePopUp } from "../store/slices/showNavPopupSlice";
import Loading from "../components/Loading";

function ProductPage() {
  // Component State
  const [qty, setQty] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.product);

  // Fetched the product from back-end through product ID
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  // Loading
  if (isLoading) {
    return <Loading />;
  }

  const { name, image, rating, numReviews, price, description, countInStock } =
    data;

  // Product Quantity
  function increaseQty() {
    if (qty >= data.countInStock) {
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
    setShowAlert(true);
    setQty(1);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }

  return (
    <Wrapper onClick={() => dispatch(togglePopUp(false))}>
      <div className="back-btn">
        <Link to={"/"}>
          <button>go back</button>
        </Link>
        {showAlert && <Alert msg={"Item added to cart"} />}
      </div>
      <div className="dashboard">
        <div className="image">
          <img src={image} alt={name} />
        </div>
        <div className="prod-details">
          <div className="title">{name}</div>
          <hr />
          <div className="rating">
            <Ratings stars={rating} />
            <span>{numReviews} reviews</span>
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
        <Reviews />
      </div>
    </Wrapper>
  );
}

export default ProductPage;
