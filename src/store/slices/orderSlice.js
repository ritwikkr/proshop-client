import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../helper/url";

export const createOrder = createAsyncThunk(
  "createOrder",
  async (orderDetails, { rejectWithValue }) => {
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

export const fetchOrders = createAsyncThunk("fetchOrder", async (userId) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/api/v1/order/getOrder`, {
      userId,
    });
    return data;
  } catch (error) {
    console.log(`FetchOrderError: ${error}`);
  }
});

const orderSlice = createSlice({
  name: "order",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
    errorMsg: null,
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
  },
});

export const { setDeliveryDetails, changePaymentMethod, emptyCart } =
  orderSlice.actions;
export default orderSlice.reducer;
