import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../helper/url";
import axiosInstance from "../../helper/axiosInstanceWithJWT";

// Action
export const fetchProduct = createAsyncThunk(
  "fetchProduct",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/api/v1/product/getProduct/${id}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// PATCH: Give reviews
export const giveProductReview = createAsyncThunk(
  "giveProductReview",
  async ({ productId, review, rating }) => {
    try {
      const { user } = JSON.parse(localStorage.getItem("user"));
      const { data } = await axiosInstance.patch(
        `${BASE_URL}/api/v1/product/reviews`,
        { userId: user?._id, review, rating, productId }
      );
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

// PATCH: Delete reviews
export const deleteProductReview = createAsyncThunk(
  "deleteProductReview",
  async (body) => {
    try {
      const { data } = await axiosInstance.delete(
        `${BASE_URL}/api/v1/product/reviews`,
        { data: body }
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const singleProductSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: true,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.isError = action.payload;
    });

    // Give Product Review
    builder.addCase(giveProductReview.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(giveProductReview.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.ratingsAndReviews = action.payload.ratingsAndReviews;
    });
    builder.addCase(giveProductReview.rejected, (state, action) => {});

    // deleteProductReview
    builder.addCase(deleteProductReview.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteProductReview.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.ratingsAndReviews = action.payload;
    });
    builder.addCase(deleteProductReview.rejected, (state, action) => {});
  },
});

export default singleProductSlice.reducer;
