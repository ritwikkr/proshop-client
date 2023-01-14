import axios from "axios";
import React, { useEffect, useState } from "react";

function Payment() {
  const [loading, setLoading] = useState(false);
  const [orderAmount, setOrderAmount] = useState(0);
  const [orders, setOrders] = useState([]);

  function loadRazorpay() {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      alert("Razorpay SDK failed to load. Are you online?");
    };
    script.onload = async () => {
      try {
        setLoading(true);
        const result = await axios.post("/order/create-order", {
          amount: orderAmount + "00",
        });
        const { amount, id: order_id, currency } = result.data;
        const {
          data: { key: razorpayKey },
        } = await axios.get("/order/get-razorpay-key");
        const options = {
          key: razorpayKey,
          amount: amount.toString(),
          currency,
          name: "example name",
          description: "example transaction",
          order_id,
          handler: async function (response) {
            const result = await axios.post("/order/pay-order", {
              amount,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            });
            alert(result.data.msg);
          },
          prefill: {
            name: "sample name",
            email: "sample email",
            contact: "0000000000",
          },
        };
        setLoading(false);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (error) {
        alert(error);
        setLoading(false);
        console.log(error);
      }
    };
  }

  return (
    <button disabled={loading} onClick={loadRazorpay}>
      Payment
    </button>
  );
}

export default Payment;
