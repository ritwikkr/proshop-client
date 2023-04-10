import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },
  reducers: {
    addToCart: (state, action) => {
      const isProductPresent = state.data.find(
        (item) => item._id === action.payload._id
      );
      if (isProductPresent) {
        state.data = state.data.map((item) => {
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
      state.data = state.data.filter((item) => item._id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
    emptyCart: (state) => {
      state.data = [];
<<<<<<< HEAD
      localStorage.removeItem("cart");
=======
>>>>>>> origin/master
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
