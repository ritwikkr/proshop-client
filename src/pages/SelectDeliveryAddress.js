import React from "react";
import Wrapper from "../wrapper/SelectDeliveryAddressStyle";
import ProgressBar from "../components/ProgressBar";

function SelectDeliveryAddress() {
  return (
    <Wrapper>
      <div className="main">
        <ProgressBar selectAddress shipping />
        <div className="content"></div>
      </div>
    </Wrapper>
  );
}

export default SelectDeliveryAddress;
