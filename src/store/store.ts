import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productsReducer from "./slices/productsSlice";
import singleProductReducer from "./slices/singleProductSlice";
import cartReducer from "./slices/cartSlice";
import searchReducer from "./slices/searchSlice";
import showNavPopupReducer from "./slices/showNavPopupSlice";
import orderReducer from "./slices/orderSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    product: singleProductReducer,
    cart: cartReducer,
    searchText: searchReducer,
    showNavPopup: showNavPopupReducer,
    order: orderReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
