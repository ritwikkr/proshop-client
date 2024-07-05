import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Wrapper from "../wrapper/OTPVerificationWrapper";
import { verifyOTP } from "../store/slices/userSlice";
import { AppDispatch } from "../store/store";
import { RootState } from "../interface/store/storeTypes";

function OTPVerification() {
  // Component State
  const [otp, setOtp] = useState("");
  const { email } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  // Side Effect
  useEffect(() => {
    if (data && data.user.isVerified) {
      navigate("/");
    }
  }, [data]);

  function formSubmitHandler(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (otp.length && email) dispatch(verifyOTP({ otp, email }));
  }
  return (
    <Wrapper>
      <div className="content">
        <div className="heading">
          <h2>
            Please Enter Your OTP. We have sent it to your registered mail.
          </h2>
        </div>
        <div className="body">
          <form onSubmit={formSubmitHandler}>
            <div className="form-content">
              <input
                type="number"
                placeholder="Enter OTP"
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <div className="form-content">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default OTPVerification;
