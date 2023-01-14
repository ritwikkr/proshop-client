import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productsReducer from "./slices/productsSlice";
import singleProductReducer from "./slices/singleProductSlice";
import cartReducer from "./slices/cartSlice";
import searchReducer from "./slices/searchSlice";
import showNavPopupReducer from "./slices/showNavPopupSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    product: singleProductReducer,
    cart: cartReducer,
    searchText: searchReducer,
    showNavPopup: showNavPopupReducer,
  },
});

export default store;
