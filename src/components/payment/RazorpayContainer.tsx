import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { createOrder, emptyCart } from "../../store/slices/orderSlice";
import Wrapper from "../../wrapper/RazorpayContainerWrapper";
import { RootState } from "../../interface/store/storeTypes";
import { AppDispatch } from "../../store/store";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

function RazorpayContainer() {
  // Component State
  const [disableHandler, setDisableHandler] = useState(false);

  //   Redux
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.cart);
  const { data: userData } = useSelector((state: RootState) => state.user);
  const { deliveryAddress } = useSelector((state: RootState) => state.order);
  // Navigate
  const navigate = useNavigate();

  const totalPrice = data.reduce((acc, item) => {
    return acc + item.price * item.qty;
  }, 0);

  //   Side Effect
  useEffect(() => {
    // Dynamically load the Razorpay script when the component mounts
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    try {
      setDisableHandler(true);
      const URL =
        process.env.REACT_APP_ENV === "production"
          ? "https://proshop-api-n2t7.onrender.com/api/v1/payment/razor"
          : "http://localhost:4000/api/v1/payment/razor";
      console.log("Requesting URL:", URL);
      const taxPrice = totalPrice * 0.1;
      const response = await axios.post(URL, {
        totalPrice: (totalPrice + taxPrice).toFixed(0),
      });

      const options = {
        key: process.env.REACT_APP_RAZOR_KEY,
        amount: response.data.amount,
        currency: response.data.currency,
        name: "ProShop",
        description: "Test Payment",
        image: "",
        order_id: response.data.id,
        receipt: Math.random(),
        handler: () => {
          // Handle the successful payment response here
          // Change Stock
          if (userData)
            dispatch(
              createOrder({
                orderDetails: data,
                userId: userData.user._id,
                totalPrice,
                deliveryAddress,
              })
            );
          dispatch(emptyCart());
          navigate("/payment-success");
        },
        prefill: {
          name: deliveryAddress?.name,
          contact: deliveryAddress?.phoneNumber,
        },
        notes: {
          address: "Test address",
        },
        theme: {
          color: "#F37254",
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
      setDisableHandler(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <button onClick={handlePayment} disabled={disableHandler}>
        {disableHandler ? "Paying..." : "Pay Now"}
      </button>
    </Wrapper>
  );
}

export default RazorpayContainer;
