import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../helper/url";

// Actions
export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async ({ page, pageSize }) => {
    const response = await axios.get(
      `${BASE_URL}/api/v1/product/getProducts?page=${page}&pageSize=${pageSize}`
    );
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: true,
    products: null,
    totalCount: 0,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload.products;
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export default productsSlice.reducer;
