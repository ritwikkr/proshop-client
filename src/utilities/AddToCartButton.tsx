import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { addToCart } from "../store/slices/cartSlice";
import { toast } from "react-toastify";
import Wrapper from "../wrapper/AddToCartButtonWrapper";
import { ProductType } from "../interface/store/slice/productTypes";
import { toggleWishlist } from "../store/slices/wishlistSlice";

function AddToCartButton({ data }: { data: ProductType }) {
  // Component State
  const [qty, setQty] = useState(1);
  const path = window.location.pathname;

  // Redux
  const dispatch = useDispatch<AppDispatch>();

  // Add to Cart Function
  function addToCartHandler() {
    dispatch(addToCart({ ...data, qty }));
    setQty(1);
    if (path === "/wishlist") {
      dispatch(toggleWishlist({ itemId: data._id }));
    }
    toast.success(
      path !== "/wishlist" ? "Item added to cart" : "Item moved to cart",
      { autoClose: 1000, draggable: true }
    );
  }
  return (
    <Wrapper>
      <button
        onClick={addToCartHandler}
        disabled={data?.countInStock - qty + 1 < 1}
      >
        {path === "/wishlist" ? `move to cart` : `add to cart`}
      </button>
    </Wrapper>
  );
}

export default AddToCartButton;
