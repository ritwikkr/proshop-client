import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../helper/url";

// Actions
export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await axios.get(`${BASE_URL}/api/v1/product/getProducts`);
  return response.data;
});

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    isLoading: true,
    products: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export default productsSlice.reducer;
