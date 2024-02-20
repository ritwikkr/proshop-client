import React, { useState } from "react";
import Wrapper from "../wrapper/ShippingPageWrapper";
import ProgressBar from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import { addUserAddress } from "../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { RootState } from "../interface/store/storeTypes";

function ShippingPage() {
  // Component State
  const [userAddress, setUserAddress] = useState<{
    name: string;
    phoneNumber: string;
    address: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
  }>({
    name: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.user);

  function formSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { address, city, postal_code, country } = userAddress;
    if (!address || !city || !postal_code || !country) {
      return;
    }
    if (data) dispatch(addUserAddress({ userAddress, userId: data.user._id }));
    navigate("/select-address");
  }

  function numberChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    // Check if the input is a valid number (contains only digits) and has a length of 10 or less
    if (/^\d{0,10}$/.test(value)) {
      setUserAddress({ ...userAddress, phoneNumber: e.target.value });
    }
  }

  function postalChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    // Check if the input is a valid number (contains only digits) and has a length of 6 or less
    if (/^\d{0,6}$/.test(value)) {
      setUserAddress({ ...userAddress, postal_code: e.target.value });
    }
  }

  return (
    <Wrapper>
      <div className="main">
        <ProgressBar shipping />
        <div className="content">
          <div className="title">
            <h1>Shipping</h1>
          </div>
          <div className="body">
            <form onSubmit={formSubmitHandler}>
              <div className="form-content">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  value={userAddress.name}
                  placeholder="Enter Name"
                  onChange={(e) =>
                    setUserAddress({
                      ...userAddress,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-content">
                <label htmlFor="phone-number">Phone Number</label>
                <input
                  type="number"
                  value={userAddress.phoneNumber}
                  placeholder="Enter Phone Number"
                  onChange={numberChangeHandler}
                />
              </div>
              <div className="form-content">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter Address"
                  value={userAddress.address}
                  onChange={(e) =>
                    setUserAddress({
                      ...userAddress,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-content">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter City"
                  value={userAddress.city}
                  onChange={(e) =>
                    setUserAddress({ ...userAddress, city: e.target.value })
                  }
                />
              </div>
              <div className="form-content">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  placeholder="Enter State"
                  value={userAddress.state}
                  onChange={(e) =>
                    setUserAddress({ ...userAddress, state: e.target.value })
                  }
                />
              </div>
              <div className="form-content">
                <label htmlFor="code">Postal Code</label>
                <input
                  type="number"
                  id="code"
                  placeholder="Enter Postal Code"
                  value={userAddress.postal_code}
                  onChange={postalChangeHandler}
                />
              </div>
              <div className="form-content">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  placeholder="Enter Country"
                  value={userAddress.country}
                  onChange={(e) =>
                    setUserAddress({
                      ...userAddress,
                      country: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-content">
                <button type="submit">Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ShippingPage;
