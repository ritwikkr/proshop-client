import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Wrapper from "../wrapper/SelectDeliveryAddressStyle";
import ProgressBar from "../components/ProgressBar";
import { setDeliveryDetails } from "../store/slices/orderSlice";

function SelectDeliveryAddress() {
  // Component State
  const [selectedAddress, setSelectedAddress] = useState({});

  // Redux
  const dispatch = useDispatch();

  // Navigation
  const navigate = useNavigate();

  const { data } = useSelector((state) => state.user);

  function handleAddressChange(event) {
    const selectedId = event.target.value;
    const selectedAddr = data?.user?.address.find(
      (address) => address._id === selectedId
    );
    setSelectedAddress(selectedAddr);
  }

  function handleClick() {
    dispatch(setDeliveryDetails(selectedAddress));
    navigate("/paymentMethod");
  }
  return (
    <Wrapper>
      <div className="main">
        <ProgressBar selectAddress shipping />
        <div className="content">
          <div className="delivery-address">
            <h3>Select Delivery Address</h3>
            <div className="body">
              {data?.user?.address.map((address, index) => (
                <div className="address" key={index}>
                  <label>
                    <input
                      type="radio"
                      value={address._id}
                      checked={
                        selectedAddress && selectedAddress._id === address._id
                      }
                      onChange={handleAddressChange}
                    />
                    <div className="details">
                      <div className="name">{address.name}</div>
                      <div className="address">
                        {address.address}, {address.city}, {address.state} -{" "}
                        {address.postal}
                      </div>
                      <div className="number">
                        Mobile: <span>{address.phoneNumber}</span>
                      </div>
                    </div>
                  </label>
                </div>
              ))}
              <div
                className="add-address"
                onClick={() => navigate("/shipping")}
              >
                <AiOutlinePlus />
                <p>Add Address</p>
              </div>
              <div className="btn" onClick={handleClick}>
                <button>Continue</button>
              </div>
            </div>
          </div>
          <div className="subtotal"></div>
        </div>
      </div>
    </Wrapper>
  );
}

export default SelectDeliveryAddress;
