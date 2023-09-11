import React from "react";
import Wrapper from "../wrapper/PlaceOrderPageWrapper";
import ProgressBar from "../components/ProgressBar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function PlaceOrderPage() {
  const { data } = useSelector((state) => state.cart);
  const { deliveryAddress } = useSelector((state) => state.order);
  const totalItemPrice = data.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const totalTaxPrice = 0.08 * totalItemPrice;
  return (
    <Wrapper>
      <div className="main">
        <div className="progress-bar">
          <ProgressBar shipping paymentMethod placeOrder selectAddress />
        </div>
        <div className="body">
          <div className="product-details">
            <div className="shipping">
              <h2 className="title">shipping</h2>
              <div className="delivery-address">
                <p className="name">
                  <span>Name:</span> {deliveryAddress.name}
                </p>
                <p className="number">
                  <span>Phone:</span> {deliveryAddress?.phoneNumber}
                </p>
                <p className="address">
                  <span>Address:</span>
                  {deliveryAddress.address}, {deliveryAddress.city},
                  {deliveryAddress.state}, {deliveryAddress.postal}
                </p>
              </div>
            </div>
            <hr />
            <div className="payment-method">
              <h2 className="title">payment method</h2>
              <p>Method: PayPal</p>
            </div>
            <hr />
            <div className="order-items">
              <h2 className="title">order items</h2>
              <ul>
                {data.map((item) => (
                  <ProductCard item={item} key={item._id} />
                ))}
              </ul>
            </div>
          </div>
          <div className="order-summary">
            <div className="title">
              <h2>order summary</h2>
            </div>
            <hr />
            <div className="body">
              <div className="items">
                <p>Items</p>
                <p>$ {totalItemPrice.toFixed(2)}</p>
              </div>
              <hr />
              <div className="shipping">
                <p>Shipping</p>
                <p>$ 0.00</p>
              </div>
              <hr />
              <div className="tax">
                <p>Tax</p>
                <p>$ {totalTaxPrice.toFixed(2)}</p>
              </div>
              <hr />
              <div className="total">
                <p>Total</p>
                <p>$ {(totalItemPrice + totalTaxPrice).toFixed(2)}</p>
              </div>
              <hr />
              <Link to={"/checkout"}>
                <div className="btn">
                  <button>Checkout</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default PlaceOrderPage;
