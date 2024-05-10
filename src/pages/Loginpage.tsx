import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Wrapper from "../wrapper/LoginPageWrapper";
import { useDispatch, useSelector } from "react-redux";
import { createSession, resetError } from "../store/slices/userSlice";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { AppDispatch } from "../store/store";
import { RootState } from "../interface/store/storeTypes";
import { fetchWishlist } from "../store/slices/wishlistSlice";

function Loginpage() {
  const [showLogin, setShowLogin] = useState(true);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [btnDisabled, setBtnDisabled] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();

  const { data, isError, errorMsg } = useSelector(
    (state: RootState) => state.user
  );

  // Alert Functionality
  useEffect(() => {
    if (isError) {
      setBtnDisabled(false);
      toast.error(errorMsg);
    } else if (data) {
      toast.success("Authentication successful. Redirecting...", {
        autoClose: 2000,
      });
    }
    return () => {
      dispatch(resetError());
    };
  }, [isError, data]);

  useEffect(() => {
    if (data) {
      dispatch(fetchWishlist());
      if (location.search.includes("select-address")) {
        return navigate("/select-address");
      }
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [data, navigate, location.search]);

  function formSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBtnDisabled(true);
    const { name, email, password, confirmPassword } = userDetails;

    if (showLogin) {
      dispatch(
        createSession({ sessionType: "login", userData: { email, password } })
      );
    } else {
      dispatch(
        createSession({
          sessionType: "signup",
          userData: { name, email, password, confirmPassword },
        })
      );
    }
  }

  return (
    <Wrapper>
      <div className="session-form">
        <div className="head">
          <h1> {showLogin ? <p>sign in</p> : <p>sign up</p>} </h1>
        </div>
        <div className="body">
          <form onSubmit={formSubmitHandler}>
            {!showLogin && (
              <div className="form-content">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="enter name"
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, name: e.target.value })
                  }
                />
              </div>
            )}
            <div className="form-content">
              <label htmlFor="email">email address</label>
              <input
                type="email"
                id="email"
                placeholder="enter email"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
              />
            </div>
            <div className="form-content">
              <label htmlFor="password">password</label>
              <input
                type="password"
                id="password"
                placeholder="enter password"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
              />
            </div>
            {!showLogin && (
              <div className="form-content">
                <label htmlFor="confirm-password">confirm password</label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="enter confirm password"
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>
            )}
            <div className="form-content">
              <button type="submit" disabled={btnDisabled}>
                {btnDisabled ? (
                  "Please Wait"
                ) : showLogin ? (
                  <p>sign in</p>
                ) : (
                  <p>sign up</p>
                )}
              </button>
            </div>
            <div className="form-content">
              {showLogin ? (
                <>
                  <Link to={"/forgot-password"}>
                    <p className="forgot-password">Forgot Password</p>
                  </Link>
                  <p>
                    new customer?
                    <span onClick={() => setShowLogin(false)}>register</span>
                  </p>
                </>
              ) : (
                <p>
                  already registered?
                  <span onClick={() => setShowLogin(true)}>login</span>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default Loginpage;
