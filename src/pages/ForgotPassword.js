import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Wrapper from "../wrapper/ForgotPasswordWrapper";
import { forgotPassword } from "../store/slices/userSlice";

function ForgotPassword() {
  // Component State
  const [email, setEmail] = useState("");

  // Redux
  const dispatch = useDispatch();

  // Handle Forgot Password
  function forgotPasswordHandler(e) {
    e.preventDefault();
    dispatch(forgotPassword(email));
  }
  return (
    <Wrapper>
      <div className="body">
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
