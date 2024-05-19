import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsFillCartFill } from "react-icons/bs";
import { FaUserAlt, FaHeart } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

import Wrapper from "../wrapper/HeaderWrapper";
import { logOut } from "../store/slices/userSlice";
import { addSearchText } from "../store/slices/searchSlice";
import { togglePopUp } from "../store/slices/showNavPopupSlice";
import { RootState } from "../interface/store/storeTypes";
import { removeDeliveryDetails } from "../store/slices/orderSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.user);
  const { data: cartItems } = useSelector((state: RootState) => state.cart);
  const { show } = useSelector((state: RootState) => state.showNavPopup);

  // Show Header PopUp
  function toggleAccountSection() {
    if (show) {
      dispatch(togglePopUp(false));
    } else {
      dispatch(togglePopUp(true));
    }
  }

  // Dispatches the searched keyword into Global State
  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(addSearchText(e.target.value));
  }

  // Logout Handler Function
  function logoutHandler() {
    dispatch(logOut());
    dispatch(removeDeliveryDetails());
    dispatch(togglePopUp(false));
    navigate("/");
  }

  return (
    <Wrapper>
      <div className="body">
        <div className="left">
          <div className="logo">
            <Link to={"/"}>
              <h2>proshop</h2>
            </Link>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search Products..."
              onChange={(e) => changeHandler(e)}
            />
            <button type="submit">Search</button>
          </div>
        </div>
        <div className="navigation">
          <div className="cart">
            <Link to={"/cart"}>
              <div className="icon">
                <BsFillCartFill />
              </div>
              <p className="text">cart</p>
              <p className="length">
                {cartItems.length > 0 && <span>{cartItems.length}</span>}
              </p>
            </Link>
          </div>
          <div className="profile">
            {data ? (
              <div className="user">
                <p onClick={() => toggleAccountSection()}>
                  {data.user.name.slice(0, 6)}
                  <span className="caret">
                    <AiFillCaretDown />
                  </span>
                </p>
                <ul className={show ? "showAccount" : undefined}>
                  <Link to={"/profile"}>
                    <li>Profile</li>
                  </Link>
                  <hr />
                  <li onClick={() => logoutHandler()}>Logout</li>
                </ul>
              </div>
            ) : (
              <Link to={"/login"}>
                <div className="icon">
                  <FaUserAlt />
                </div>
                <p>Sign</p>
              </Link>
            )}
          </div>
          {data && (
            <div className="wishlist">
              <Link to={"/wishlist"}>
                <div className="icon">
                  <FaHeart />
                </div>
                <p>Wishlist</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
