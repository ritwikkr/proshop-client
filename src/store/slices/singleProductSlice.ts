import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../helper/url";
import axiosInstance from "../../helper/axiosInstanceWithJWT";
import { SingleProductType } from "../../interface/store/slice/singleProductTypes";

// Action
export const fetchProduct = createAsyncThunk(
  "fetchProduct",
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/api/v1/product/getProduct/${id}`
      );
      return data;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);

// PATCH: Give reviews
export const giveProductReview = createAsyncThunk(
  "giveProductReview",
  async (
    {
      productId,
      review,
      rating,
    }: { productId: string; review: string; rating: number },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axiosInstance.patch(
        `${BASE_URL}/api/v1/product/reviews`,
        { review, rating, productId }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// PATCH: Delete reviews
export const deleteProductReview = createAsyncThunk(
  "deleteProductReview",
  async (body: { productID: string; userID: string }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete(
        `${BASE_URL}/api/v1/product/reviews`,
        { data: body }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const singleProductSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: true,
    data: null,
    isError: false,
  } as SingleProductType,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state) => {
      state.isError = true;
    });

    // Give Product Review
    builder.addCase(giveProductReview.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(giveProductReview.fulfilled, (state, action) => {
      state.isLoading = false;
      if (state.data) {
        state.data.ratingsAndReviews = action.payload.ratingsAndReviews;
      }
    });
    builder.addCase(giveProductReview.rejected, () => {});

    // deleteProductReview
    builder.addCase(deleteProductReview.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteProductReview.fulfilled, (state, action) => {
      state.isLoading = false;
      if (state.data) state.data.ratingsAndReviews = action.payload;
    });
    builder.addCase(deleteProductReview.rejected, () => {});
  },
});

export default singleProductSlice.reducer;
