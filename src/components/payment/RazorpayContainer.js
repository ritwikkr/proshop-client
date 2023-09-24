import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { createOrder, emptyCart } from "../../store/slices/orderSlice";
import Wrapper from "../../wrapper/RazorpayContainerWrapper";

function RazorpayContainer() {
  // Component State
  const [disableHandler, setDisableHandler] = useState(false);

  //   Redux
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.cart);
  const { data: userData } = useSelector((state) => state.user);
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
      const URL = "https://proshop-api-n2t7.onrender.com/api/v1/payment/razor";
      console.log("Requesting URL:", URL);
      const response = await axios.post(URL, { totalPrice });

      const options = {
        key: "rzp_test_H5m8Qvt4qQxXy5",
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
          dispatch(
            createOrder({
              orderDetails: data,
              userId: userData.user._id,
              totalPrice,
            })
          );
          dispatch(emptyCart());
          navigate("/payment-success");
        },
        prefill: {
          name: "John Doe",
          email: "john.doe@example.com",
          contact: "1234567890",
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
