import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import BASE_URL from "../helper/url";
import Wrapper from "../wrapper/CheckoutFormWrapper";
import { createOrder } from "../store/slices/orderSlice";
import { CartItem } from "../interface/store/slice/cartTypes";
import { OrderTypes } from "../interface/store/slice/orderTypes";
import { RootState } from "../interface/store/storeTypes";
import { AppDispatch } from "../store/store";

export interface CheckoutFormProps {
  totalPrice: number;
  orderDetails: { data: CartItem[] };
  deliveryAddress: OrderTypes;
}

const MyCheckoutForm = ({
  totalPrice,
  orderDetails,
  deliveryAddress,
}: CheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { data: userData } = useSelector((state: RootState) => state.user);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      return;
    }

    const result = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (result.error) {
      setError(result.error.message || null);
      setSuccess(null);
    } else {
      setError(null);
      try {
        await axios.post(`${BASE_URL}/api/v1/payment`, {
          amount: +totalPrice.toFixed(0) * 100,
          currency: "inr",
          payment_method: result.paymentMethod.id,
        });
        setSuccess("Payment succeeded!");
        navigate("/payment-success");
        if (userData)
          dispatch(
            createOrder({
              orderDetails,
              userId: userData.user._id,
              totalPrice,
              deliveryAddress,
            })
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
