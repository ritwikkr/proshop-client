import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import BASE_URL from "../../helper/url";
import { ProductsState } from "../../interface/store/slice/productTypes";

// Action Interface
interface fetchProducts {
  page: number;
  pageSize: number;
}

// Action -> Fetch Products from API
export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async ({ page, pageSize }: fetchProducts, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/product/getProducts?page=${page}&pageSize=${pageSize}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: ProductsState = {
  isLoading: true,
  products: null,
  totalCount: 0,
  isError: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload.products;
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default productsSlice.reducer;
