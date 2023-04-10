import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import BASE_URL from "../helper/url";
import Wrapper from "../wrapper/CheckoutFormWrapper";
import { createOrder } from "../store/slices/orderSlice";

const MyCheckoutForm = ({ totalPrice, orderDetail }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: userData } = useSelector((state) => state.user);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    // Perform some async task, like a fetch call or setTimeout
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    const result = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (result.error) {
      setError(result.error.message);
      setSuccess(null);
    } else {
      setError(null);
      try {
        await axios.post(`${BASE_URL}/api/v1/payment`, {
          amount: totalPrice.toFixed(0) * 100,
          currency: "inr",
          payment_method: result.paymentMethod.id,
        });
        setSuccess("Payment succeeded!");
        navigate("/payment-success");
        dispatch(
          createOrder({ orderDetail, userId: userData.user._id, totalPrice })
        );
      } catch (error) {
        console.log("Stripe Error: ", error);
      }
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h2>Enter your card details</h2>
        <div>
          <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
        </div>
        {error && <div>{error}</div>}
        {success && <div>{success}</div>}
        <button disabled={isLoading} type="submit">
          {isLoading ? "Paying..." : "Pay Now"}
        </button>
      </form>
    </Wrapper>
  );
};

export default MyCheckoutForm;
