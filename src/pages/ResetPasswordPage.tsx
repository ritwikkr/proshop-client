import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

import { resetPassword, checkJWTExpiry } from "../store/slices/userSlice";
import Wrapper from "../wrapper/ResetPasswordWrapper";
import Alert from "../components/Alert";
import { RootState } from "../interface/store/storeTypes";
import { AppDispatch } from "../store/store";

function ResetPasswordPage() {
  // Component State
  const [showAlert, setShowAlert] = useState(false);
  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const currentURL = window.location.href;
  // Redux
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { passwordReseted, jwtExpired } = useSelector(
    (state: RootState) => state.user
  );

  // Side Effect
  useEffect(() => {
    if (passwordReseted) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [passwordReseted, navigate]);
  // Check if the JWT Token is correct
  useEffect(() => {
    dispatch(checkJWTExpiry({ token: currentURL.split("token=")[1] }));
  }, [dispatch, currentURL]);

  // Handle Forgot Password
  function resetPasswordHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      !password.newPassword ||
      !password.confirmPassword ||
      password.newPassword !== password.confirmPassword
    ) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }
    dispatch(resetPassword({ password, token: currentURL.split("token=")[1] }));
  }

  if (jwtExpired) {
    return (
      <Wrapper>
        <div className="link-expired">
          <p>Link Expired. Please send new forgot password request</p>
          <p className="home">
            Go
            <div className="icon" onClick={() => navigate("/")}>
              <AiFillHome />
            </div>
          </p>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="body">
        {showAlert && (
          <Alert
            type="error"
            message="Please fill in the password fields and make sure they match."
          />
        )}
        {passwordReseted && (
          <Alert type="success" message="Password Reset Successfully" />
        )}
        <form onSubmit={resetPasswordHandler}>
          <div className="form-content">
            <label htmlFor="email">New Password</label>
            <input
              type="password"
              id="email"
              placeholder="Enter New Password"
              onChange={(e) =>
                setPassword({ ...password, newPassword: e.target.value })
              }
            />
          </div>
          <div className="form-content">
            <label htmlFor="email">Confirm New Password</label>
            <input
              type="password"
              id="email"
              placeholder="Confirm Your Password"
              onChange={(e) =>
                setPassword({ ...password, confirmPassword: e.target.value })
              }
            />
          </div>
          <div className="form-content">
            <button>Reset Password</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default ResetPasswordPage;
