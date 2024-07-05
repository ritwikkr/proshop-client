import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { createSession } from "../store/slices/userSlice";
import { AppDispatch } from "../store/store";
import { CreateSessionThunkArgs } from "../interface/store/slice/userTypes";

const GoogleLoginRedirect = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const googleId = searchParams.get("googleId") || undefined;
    const name = searchParams.get("name") || undefined;
    const email = searchParams.get("email");
    const token = searchParams.get("token") || undefined;
    const _id = searchParams.get("_id") || undefined;

    const wishlist = searchParams.get("wishlist")
      ? JSON.parse(searchParams.get("wishlist")!)
      : [];
    const address = searchParams.get("address")
      ? JSON.parse(searchParams.get("address")!)
      : [];

    if (email) {
      const userData = { googleId, name, email, token, wishlist, address, _id };
      const args: CreateSessionThunkArgs = { sessionType: "google", userData };

      dispatch(createSession(args))
        .unwrap()
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.error("Google login failed:", error);
        });
    } else {
      console.error("Email is required for Google login");
    }
  }, [dispatch, location, navigate]);

  return <div>Logging in...</div>;
};

export default GoogleLoginRedirect;
