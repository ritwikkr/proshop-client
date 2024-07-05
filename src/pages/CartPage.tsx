import React from "react";
import Wrapper from "../wrapper/CartPageWrapper";
import { FaTrash, FaHome } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../interface/store/storeTypes";
import GoBackButton from "../utilities/GoBackButton";

function CartPage() {
  const { data } = useSelector((state: RootState) => state.cart);
  const { data: userData } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = data.reduce((acc, item) => {
    return acc + item.price * item.qty;
  }, 0);

  function itemRemoveHandler(id: string) {
    dispatch(removeFromCart(id));
  }

  function proceedHandler() {
    if (!userData) {
      return navigate("/login?select-address");
    }
    navigate("/select-address");
  }

  return (
    <Wrapper>
      <div className="cart">
        <div className="back-btn">
          <GoBackButton />
        </div>
        <div className="title">
          <p>shopping cart</p>
        </div>
        <div className="body">
          {data.length === 0 ? (
            <h1>
              <p>No items in cart.</p>
              <Link to={"/"}>
                <FaHome />
              </Link>
            </h1>
          ) : (
            <>
              {data.map((item) => (
                <div className="item" key={item._id}>
                  <div className="prod-view">
                    <div className="image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="product-title">
                      <p>{item.name}</p>
                    </div>
                  </div>
                  <div className="price">
                    <p>${item.price}</p>
                  </div>
                  <div className="product-qty">
                    <p>Qty:</p>
                    {item.qty}
                  </div>
                  <div
                    className="remove"
                    onClick={() => itemRemoveHandler(item._id)}
                  >
                    <FaTrash />
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      {data.length > 0 && (
        <div className="subtotal">
          <div className="title">
            <p>subtotal ({data.length}) items</p>
          </div>
          <div className="amt">
            <p>$ {totalPrice.toFixed(2)}</p>
          </div>
          <div className="btn">
            <button
              onClick={() => proceedHandler()}
              disabled={data.length === 0}
            >
              proceed to checkout
            </button>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default CartPage;
