import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Wrapper from "../wrapper/ForgotPasswordWrapper";
import { forgotPassword, resetError } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { RootState } from "../interface/store/storeTypes";
import { AppDispatch } from "../store/store";
import GoBackButton from "../utilities/GoBackButton";

function ForgotPassword() {
  // Component State
  const [email, setEmail] = useState("");

  // Redux
  const dispatch = useDispatch<AppDispatch>();
  const { emailSent, isError, isLoading } = useSelector(
    (state: RootState) => state.user
  );

  // Side Effect
  useEffect(() => {
    if (emailSent) {
      toast.success("Reset password link has been sent to your email");
    } else if (isError) {
      toast.error(
        "Error while mailing reset password link. Try checking your email"
      );
    }
    return () => {
      dispatch(resetError());
    };
  }, [emailSent, isError]);

  // Handle Forgot Password
  function forgotPasswordHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(forgotPassword(email));
  }
  return (
    <Wrapper>
      <div className="body">
        <GoBackButton />
        <div className="heading">
          <h1>Forgot Password</h1>
        </div>
        {!emailSent ? (
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
              <button disabled={isLoading}>Send Email</button>
            </div>
          </form>
        ) : (
          <p>Please goto your email and check for the link</p>
        )}
      </div>
    </Wrapper>
  );
}

export default ForgotPassword;
