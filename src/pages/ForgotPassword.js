import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Wrapper from "../wrapper/ForgotPasswordWrapper";
import { forgotPassword } from "../store/slices/userSlice";
import Alert from "../components/Alert";

function ForgotPassword() {
  // Component State
  const [email, setEmail] = useState("");
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);

  // Redux
  const dispatch = useDispatch();
  const { isLoading, emailSent, isError } = useSelector((state) => state.user);

  // Side Effect
  useEffect(() => {
    console.log(isError, isLoading);
    if (!isLoading && isError) {
      console.log(`first`);
      setShowErrorAlert(true);
    }
    if (!isLoading && emailSent) {
      setSuccessAlert(true);
    }
  }, [isLoading, emailSent, isError]);

  // Reset error and success alert to false after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      setSuccessAlert(false);
      setShowErrorAlert(false);
    }, 3000);
  }, [isError, isLoading, emailSent]);

  // Handle Forgot Password
  function forgotPasswordHandler(e) {
    e.preventDefault();
    dispatch(forgotPassword(email));
  }
  return (
    <Wrapper>
      <div className="body">
        {showErrorAlert && (
          <Alert
            type="error"
            message="Error while mailing reset password link. Try checking your email"
          />
        )}
        {successAlert && (
          <Alert
            type="success"
            message="Email Sent Successfully. Check your inbox"
          />
        )}
        <div className="heading">
          <h1>Forgot Password</h1>
        </div>
        <form onSubmit={forgotPasswordHandler}>
          <div className="form-content">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-content">
            <button>Send Email</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

export default ForgotPassword;
