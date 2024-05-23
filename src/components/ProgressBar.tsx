import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RootState } from "../interface/store/storeTypes";

interface ProgressBarProps {
  shipping?: boolean;
  paymentMethod?: boolean;
  placeOrder?: boolean;
  selectAddress?: boolean;
}

function ProgressBar({
  shipping,
  paymentMethod,
  placeOrder,
  selectAddress,
}: ProgressBarProps) {
  const { deliveryAddress } = useSelector((state: RootState) => state.order);
  const { data } = useSelector((state: RootState) => state.user);
  return (
    <Wrapper>
      <div className="progress-bar">
        <ul>
          <li className={data ? "active" : undefined}>Sign In</li>
          <li className={shipping ? "active" : undefined}>
            <Link to={"/shipping"}>Shipping</Link>
          </li>
          <li className={selectAddress ? "active" : undefined}>
            <Link to={"/select-address"}>Select Delivery Address</Link>
          </li>
          <li className={paymentMethod ? "active" : undefined}>
            {deliveryAddress.name ? (
              <Link to={"/paymentMethod"}>Payment</Link>
            ) : (
              <p>Payment</p>
            )}
          </li>
          <li className={placeOrder ? "active" : undefined}>Place Order</li>
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

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
