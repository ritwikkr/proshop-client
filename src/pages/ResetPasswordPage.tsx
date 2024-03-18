import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { toast } from "react-toastify";

import { resetPassword, checkJWTExpiry } from "../store/slices/userSlice";
import Wrapper from "../wrapper/ResetPasswordWrapper";
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

  // Alert Functionality
  useEffect(() => {
    if (showAlert) {
      toast.error("Passwords do not match");
    } else if (passwordReseted) {
      toast.success("Password reset successfully");
    }
  }, [showAlert, passwordReseted]);

  return (
    <Wrapper>
      <div className="body">
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
