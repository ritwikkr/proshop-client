import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import axiosInstanceWithJWT from "../../helper/axiosInstanceWithJWT";
import BASE_URL from "../../helper/url";
import { CheckoutFormProps } from "../../pages/CheckoutForm";

interface OrderDetailsType extends CheckoutFormProps {
  userId: string;
}

export const createOrder = createAsyncThunk(
  "createOrder",
  async (orderDetails: OrderDetailsType, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/api/v1/order/create`,
        orderDetails
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchOrders = createAsyncThunk(
  "fetchOrder",
  async (userId: string) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/api/v1/order/getOrder`, {
        userId,
      });
      return data;
    } catch (error) {
      console.log(`FetchOrderError: ${error}`);
    }
  }
);

// GET: Fetch Single Order
export const getSingleOrder = createAsyncThunk(
  "getSingleOrder",
  async (orderId: string) => {
    try {
      const { data } = await axiosInstanceWithJWT.get(
        `/api/v1/order/${orderId}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    errorMsg: null,
    singleOrder: null,
    deliveryAddress: JSON.parse(localStorage.getItem("deliveryAddress")) || {},
    paymentMethod:
      JSON.parse(localStorage.getItem("paymentMethod")) || "paypal",
  },
  reducers: {
    setDeliveryDetails: (state, action) => {
      state.deliveryAddress = action.payload;
      localStorage.setItem(
        "deliveryAddress",
        JSON.stringify(state.deliveryAddress)
      );
    },
    changePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      localStorage.setItem(
        "paymentMethod",
        JSON.stringify(state.paymentMethod)
      );
    },
    emptyCart: (state, action) => {
      state.data = [];
      localStorage.setItem("cart", JSON.stringify([]));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createOrder.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(createOrder.rejected, (state, action) => {
      state.isError = true;
    });

    builder.addCase(fetchOrders.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      state.isError = true;
    });
    // GET: Single Order
    builder.addCase(getSingleOrder.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getSingleOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.singleOrder = action.payload;
    });
    builder.addCase(getSingleOrder.rejected, (state, action) => {});
  },
});

export const { setDeliveryDetails, changePaymentMethod, emptyCart } =
  orderSlice.actions;
export default orderSlice.reducer;
