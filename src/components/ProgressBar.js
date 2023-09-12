import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ProgressBar({ shipping, paymentMethod, placeOrder, selectAddress }) {
  const { deliveryAddress } = useSelector((state) => state.order);
  const { data } = useSelector((state) => state.user);
  return (
    <Wrapper>
      <div className="progress-bar">
        <ul>
          <li className={data ? "active" : null}>Sign In</li>
          <li className={shipping ? "active" : null}>
            <Link to={"/shipping"}>Shipping</Link>
          </li>
          <li className={selectAddress ? "active" : null}>
            <Link to={"/select-address"}>Select Delivery Address</Link>
          </li>
          <li className={paymentMethod ? "active" : null}>
            {deliveryAddress.name ? (
              <Link to={"/paymentMethod"}>Payment</Link>
            ) : (
              <p>Payment</p>
            )}
          </li>
          <li className={placeOrder ? "active" : null}>Place Order</li>
        </ul>
      </div>
    </Wrapper>
  );
}

export default ProgressBar;

const Wrapper = styled.div`
  .progress-bar {
    ul {
      display: flex;
      justify-content: space-between;
      li {
        list-style: none;
        color: gray;
      }
      li.active {
        color: black;
      }
    }
  }
`;
