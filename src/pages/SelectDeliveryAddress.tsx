import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Wrapper from "../wrapper/SelectDeliveryAddressStyle";
import ProgressBar from "../components/ProgressBar";
import { setDeliveryDetails } from "../store/slices/orderSlice";
import { deleteUserAddress } from "../store/slices/userSlice";
import { RootState } from "../interface/store/storeTypes";
import { AppDispatch } from "../store/store";

interface SelectAddressState {
  name: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  postal: number | null;
  country: string;
  _id: string;
}

function SelectDeliveryAddress() {
  // Component State
  const [selectedAddress, setSelectedAddress] = useState<SelectAddressState>({
    name: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    postal: null,
    country: "",
    _id: "",
  });
  const [errorMsg, setErrorMsg] = useState(false);

  // Redux
  const dispatch = useDispatch<AppDispatch>();

  // Navigation
  const navigate = useNavigate();

  const { data } = useSelector((state: RootState) => state.user);

  function handleAddressChange(event: React.ChangeEvent<HTMLInputElement>) {
    setErrorMsg(false);
    const selectedId = event.target.value;
    const selectedAddr = data?.user?.address.find(
      (address) => address._id === selectedId
    );
    if (selectedAddr) setSelectedAddress(selectedAddr);
  }

  function handleClick() {
    if (!Object.prototype.hasOwnProperty.call(selectedAddress, "name")) {
      return setErrorMsg(true);
    }
    dispatch(setDeliveryDetails(selectedAddress));
    navigate("/paymentMethod");
  }

  // Delete Address Handler
  function deleteAddressHandler(addressId: string) {
    if (data) dispatch(deleteUserAddress({ userId: data.user._id, addressId }));
  }

  return (
    <Wrapper>
      <div className="main">
        <ProgressBar selectAddress shipping />
        <div className="content">
          {errorMsg && (
            <div className="error">
              <p>Please select delivery address</p>
            </div>
          )}
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
                  <div
                    className="cross"
                    onClick={() => deleteAddressHandler(address._id)}
                  >
                    <AiOutlineClose />
                  </div>
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
