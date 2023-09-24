import React from "react";
import { useSelector } from "react-redux";

import Wrapper from "../wrapper/CheckoutPageWrapper";
import StripeContainer from "../components/payment/StripeContainer";
import MyCheckoutForm from "./CheckoutForm";
import ProductCard from "../components/ProductCard";
import RazorpayContainer from "../components/payment/RazorpayContainer";

function CheckoutPage() {
  // Redux
  const { data } = useSelector((state) => state.cart);
  const { data: userData } = useSelector((state) => state.user);
  const { deliveryAddress, paymentMethod } = useSelector(
    (state) => state.order
  );
  const totalPrice = data.reduce((acc, items) => {
    return (acc += items.price * items.qty);
  }, 0);

  return (
    <Wrapper>
      <div className="head"></div>
      <div className="body">
        <div className="left">
          <div className="shipping">
            <h2>SHIPPING</h2>
            <p className="name">Name: {deliveryAddress?.name}</p>
            <p className="email">Email: {userData.user.email}</p>
            <p className="number">Phone: {deliveryAddress.phoneNumber}</p>
            <p className="address">
              Address: {deliveryAddress.address}, {deliveryAddress.city},
              {deliveryAddress.state}, {deliveryAddress.postal}
            </p>
          </div>
          <div className="payment">
            <h2>PAYMENT METHOD</h2>
            <p className="method">Method: Paypal</p>
          </div>
          <div className="order-items">
            <h2>ORDER ITEMS</h2>
            <div className="order-items-body">
              {data.map((item) => (
                <ProductCard item={item} key={item._id} />
              ))}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="order-summary">
            <h2>ORDER SUMMARY</h2>
            <hr />
            <div className="items">
              <p>Items</p>
              <p>$ {totalPrice.toFixed(0)}</p>
            </div>
            <hr />
            <div className="shipping">
              <p>Shipping</p>
              <p>$ {0}</p>
            </div>
            <hr />
            <div className="tax">
              <p>Tax</p>
              <p>$ {(totalPrice * 0.1).toFixed(0)}</p>
            </div>
            <hr />
            <div className="total">
              <p>Total</p>
              <p>$ {(totalPrice + totalPrice * 0.1).toFixed(0)}</p>
            </div>
            <hr />
          </div>
          {paymentMethod === "razorpay" ? (
            <RazorpayContainer />
          ) : (
            <StripeContainer>
              <MyCheckoutForm totalPrice={totalPrice} orderDetails={data} />
            </StripeContainer>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default CheckoutPage;
