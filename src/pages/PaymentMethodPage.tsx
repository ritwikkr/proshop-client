import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import Wrapper from "../wrapper/PaymentMethodPage";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import PaymentMethodPreLoader from "../components/PaymentMethodPreLoader";
import { changePaymentMethod } from "../store/slices/orderSlice";
import { RootState } from "../interface/store/storeTypes";

function PaymentMethodPage() {
  // Component State
  const [paymentMethod, setPaymentMethod] = useState("paypal");

  // Redux
  const dispatch = useDispatch();

  // Navigation
  const navigate = useNavigate();

  const { isLoading } = useSelector((state: RootState) => state.user);

  if (isLoading) {
    return <PaymentMethodPreLoader />;
  }

  // Click Handler
  function clickHandler() {
    dispatch(changePaymentMethod(paymentMethod));
    navigate("/order");
  }

  return (
    <Wrapper>
      <div className="main">
        <ProgressBar paymentMethod shipping selectAddress />
        <div className="body">
          <h1>payment method</h1>
          <div className="select-method">
            <p className="title">select method</p>
            <ul>
              <li>
                <input
                  type="radio"
                  name="payment"
                  id="paypal"
                  onChange={() => setPaymentMethod("paypal")}
                  defaultChecked={paymentMethod === "paypal"}
                />
                <label htmlFor="paypal">PayPal or Credit Card</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="razorpay"
                  name="payment"
                  onChange={() => setPaymentMethod("razorpay")}
                />
                <label htmlFor="razorpay">Razorpay</label>
              </li>
            </ul>
          </div>
          <div className="btn">
            <button onClick={clickHandler}>continue</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default PaymentMethodPage;
