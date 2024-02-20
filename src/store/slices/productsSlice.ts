import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import BASE_URL from "../../helper/url";
import { ProductsState } from "../../interface/store/slice/productTypes";

// Actions
export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async (
    { page, pageSize }: { page: number; pageSize: number },
    { rejectWithValue }
  ) => {
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

export const fetchFeaturedProducts = createAsyncThunk(
  "fetchFeaturedProducts",
  async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/api/v1/product/getFeaturedProduct`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState: ProductsState = {
  isLoading: true,
  products: null,
  totalCount: 0,
  isError: false,
  featuredProducts: [],
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

    // Featured Product
    builder.addCase(fetchFeaturedProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.featuredProducts = action.payload;
    });
    builder.addCase(fetchFeaturedProducts.rejected, () => {});
  },
});

export default productsSlice.reducer;
