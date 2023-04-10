import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../helper/url";

// Action
export const fetchProduct = createAsyncThunk(
  "fetchProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/product/getProduct/${id}`
      );
      return response.data;
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
  },
});

export default singleProductSlice.reducer;
