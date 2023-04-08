import React from "react";
import ProgressBar from "../components/ProgressBar";
import Wrapper from "../wrapper/PaymentMethodPage";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

function PaymentMethodPage() {
  const { isLoading } = useSelector((state) => state.user);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className="main">
        <ProgressBar paymentMethod shipping />
        <div className="body">
          <h1>payment method</h1>
          <div className="select-method">
            <p className="title">select method</p>
            <input type="radio" name="paypal" id="paypal" checked readOnly />
            <label htmlFor="paypal">PayPal or Credit Card</label>
          </div>
          <div className="btn">
            <Link to={"/order"}>
              <button>continue</button>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default PaymentMethodPage;
