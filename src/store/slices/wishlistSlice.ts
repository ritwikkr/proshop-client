import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import axiosInstance from "../../helper/axiosInstanceWithJWT";
import BASE_URL from "../../helper/url";
import { ProductType } from "../../interface/store/slice/productTypes";

// Define the initial state type
interface WishlistState {
  items: ProductType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

const initialState: WishlistState = {
  items: localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist") as string)
    : [],
  status: "idle",
  error: null,
};

interface ErrorResponse {
  message: string;
  error: string;
}

// Async thunks
export const fetchWishlist = createAsyncThunk<
  ProductType[],
  void,
  {
    rejectValue: ErrorResponse; // Specify the type of the reject value (error response)
  }
>("wishlist/fetchWishlist", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get(`${BASE_URL}/api/v1/wishlist`);
    return data;
  } catch (error) {
    const err = error as AxiosError<ErrorResponse>; // Specify the error response type
    if (err.response && err.response.data) {
      return rejectWithValue(err.response.data);
    }
    return rejectWithValue({ message: "An unknown error occurred", error: "" });
  }
});

export const toggleWishlist = createAsyncThunk<
  ProductType[],
  { itemId: string },
  { rejectValue: ErrorResponse }
>(
  "wishlist/toggleWishlist",
  async ({ itemId }: { itemId: string }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(`${BASE_URL}/api/v1/wishlist`, {
        productId: itemId,
      });
      return data;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue(err?.response?.data as ErrorResponse);
    }
  }
);

// Slice
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        localStorage.setItem("wishlist", JSON.stringify(action.payload));
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action?.payload?.message;
      })
      .addCase(toggleWishlist.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(toggleWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        localStorage.setItem("wishlist", JSON.stringify(state.items));
      })
      .addCase(toggleWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action?.payload?.message;
      });
  },
});

export default wishlistSlice.reducer;
