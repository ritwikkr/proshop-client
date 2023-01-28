import React from "react";
import Wrapper from "../wrapper/PlaceOrderPageWrapper";
import ProgressBar from "../components/ProgressBar";
import { useSelector, useDispatch } from "react-redux";
import { togglePopUp } from "../store/slices/showNavPopupSlice";
import Payment from "../components/Payment";

function PlaceOrderPage() {
  const { data } = useSelector((state) => state.cart);
  const { data: userData } = useSelector((state) => state.user);
  const totalItemPrice = data.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const address = userData.user.address.reduce((acc, item) => {
    return;
  }, "");
  const dispatch = useDispatch();
  const totalTaxPrice = 0.08 * totalItemPrice;
  return (
    <Wrapper onClick={() => dispatch(togglePopUp(false))}>
      <div className="main">
        <div className="progress-bar">
          <ProgressBar shipping paymentMethod placeOrder />
        </div>
        <div className="body">
          <div className="product-details">
            <div className="shipping">
              <h2 className="title">shipping</h2>
              <p>
                Address:
                {`${userData.user.address[0].house}, ${userData.user.address[0].city},  ${userData.user.address[0].country} - ${userData.user.address[0].postal}`}
              </p>
            </div>
            <hr />
            <div className="payment-method">
              <h2 className="title">payment method</h2>
              <p>Method: PayPal</p>
            </div>
            <hr />
            <div className="order-items">
              <h2 className="title">order items</h2>
              <ul>
                {data.map((item) => (
                  <div key={item._id}>
                    <li>
                      <div className="product-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="product-title">
                        <p>{item.name}</p>
                      </div>
                      <div className="product-qty">
                        {item.qty} x $ {item.price} = $ {item.qty * item.price}
                      </div>
                    </li>
                    <hr />
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="order-summary">
            <div className="title">
              <h2>order summary</h2>
            </div>
            <hr />
            <div className="body">
              <div className="items">
                <p>Items</p>
                <p>$ {totalItemPrice.toFixed(2)}</p>
              </div>
              <hr />
              <div className="shipping">
                <p>Shipping</p>
                <p>$ 0.00</p>
              </div>
              <hr />
              <div className="tax">
                <p>Tax</p>
                <p>$ {totalTaxPrice.toFixed(2)}</p>
              </div>
              <hr />
              <div className="total">
                <p>Total</p>
                <p>$ {(totalItemPrice + totalTaxPrice).toFixed(2)}</p>
              </div>
              <hr />
              <div className="btn">
                <Payment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default PlaceOrderPage;
