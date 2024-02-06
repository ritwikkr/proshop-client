import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../interface/store/slice/cartTypes";

const cartData = localStorage.getItem("cart");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: cartData ? JSON.parse(cartData) : [],
  },
  reducers: {
    addToCart: (state, action) => {
      const isProductPresent = state.data.find(
        (item: CartItem) => item._id === action.payload._id
      );
      if (isProductPresent) {
        state.data = state.data.map((item: CartItem) => {
          if (item._id === action.payload._id) {
            const qty = Number(action.payload.qty || 1);
            return { ...item, qty: Number(item.qty) + qty };
          } else {
            return item;
          }
        });
      } else {
        state.data.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
    removeFromCart: (state, action) => {
      state.data = state.data.filter(
        (item: CartItem) => item._id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
    emptyCart: (state) => {
      state.data = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
