import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { emptyCart } from "../store/slices/cartSlice";

function PaymentSuccess() {
  const [animate, setAnimate] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    dispatch(emptyCart());
  }, [dispatch]);

  return (
    <Wrapper>
      <div className={`payment-success ${animate ? "animate" : ""}`}>
        <h1 className="title">Payment Successful!</h1>
        <p className="message">Thank you for your purchase!</p>
        <Link to="/" className="link">
          Back to Home
        </Link>
      </div>
    </Wrapper>
  );
}

export default PaymentSuccess;

const Wrapper = styled.div`
  height: calc(100vh - 130px);
  padding-top: 300px;
  .payment-success {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px;
    position: relative;
    text-align: center;
    transition: all 0.3s ease;
  }

  .payment-success.animate {
    transform: translateY(-20px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }

  .title {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 16px;
    opacity: 0;
    transform: translateY(-20px);
    animation: fade-in 0.3s ease forwards, slide-up 0.3s ease forwards;
  }

  .message {
    font-size: 24px;
    font-weight: 400;
    opacity: 0;
    transform: translateY(20px);
    animation: fade-in 0.3s ease forwards, slide-down 0.3s ease forwards;
  }

  .link {
    margin-top: 24px;
    opacity: 0;
    transform: translateY(20px);
    animation: fade-in 0.3s ease forwards, slide-down 0.3s ease forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slide-up {
    from {
      transform: translateY(-20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-down {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0);
    }
  }
`;
