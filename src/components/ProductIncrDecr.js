import React, { useState } from "react";
import Wrapper from "../wrapper/ProductIncrDecrWrapper";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cartSlice";

function ProductIncrDecr({ quant, id }) {
  const { data } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [qty, setQty] = useState(quant);

  function increaseQty() {
    if (qty >= data.countInStock) {
      return;
    }
    setQty(qty + 1);
  }

  function decreaseQty() {
    if (qty <= 1) {
      dispatch(removeFromCart(id));
    }
    setQty(qty - 1);
  }
  return (
    <Wrapper>
      <div className="change-qty">
        <button onClick={() => decreaseQty()}>-</button>
        <input type="number" readOnly value={qty} />
        <button onClick={() => increaseQty()}>+</button>
      </div>
    </Wrapper>
  );
}

export default ProductIncrDecr;
