import React, { useState, useEffect } from "react";
import Wrapper from "../wrapper/LoginPageWrapper";
import { useDispatch, useSelector } from "react-redux";
import { createSession } from "../store/slices/userSlice";
import { useNavigate, useLocation } from "react-router-dom";
import Alert from "../components/Alert";

function Loginpage() {
  const [showLogin, setShowLogin] = useState(true);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { data, isLoading, isError } = useSelector((state) => state.user);

  useEffect(() => {
    if (data) {
      if (location.search.includes("shipping")) {
        return navigate("/shipping");
      }
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [data, navigate, location.search]);

  function formSubmitHandler(e) {
    e.preventDefault();
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
          {isError && <Alert message={isError} type="error" />}
          {data && <Alert message={"Redirecting..."} type="success" />}
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
              <button type="submit" disabled={isLoading}>
                {isLoading ? (
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
                <p>
                  new customer?
                  <span onClick={() => setShowLogin(false)}>register</span>
                </p>
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
