import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import BASE_URL from "../../helper/url";
import {
  AddUserAddressThunkArgs,
  CheckJWTExpiryThunkArgs,
  CreateSessionThunkArgs,
  DeleteUserAddressThunkArgs,
  ForgotPasswordThunkArgs,
  ResetPasswordThunkArgs,
  UpdatePasswordThunkArgs,
  UpdateUserThunkArgs,
  UserData,
  UserState,
} from "../../interface/store/slice/userTypes";
import axiosInstance from "../../helper/axiosInstanceWithJWT";

// Action
export const createSession = createAsyncThunk(
  "createSession",
  async (
    { sessionType, userData }: CreateSessionThunkArgs,
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/user/${sessionType}`,
        userData
      );
      return response.data as UserData;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export const addUserAddress = createAsyncThunk(
  "addUserAddress",
  async (body: AddUserAddressThunkArgs) => {
    try {
      const response = await axios.patch(
        `${BASE_URL}/api/v1/user/addAddress`,
        body
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteUserAddress = createAsyncThunk(
  "deleteUserAddress",
  async (body: DeleteUserAddressThunkArgs) => {
    try {
      const { userId, addressId } = body;
      const { data } = await axios.delete(
        `${BASE_URL}/api/v1/user/deleteAddress?userId=${userId}&addressId=${addressId}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "updateUser",
  async (body: UpdateUserThunkArgs, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${BASE_URL}/api/v1/user/update`, body);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updatePassword = createAsyncThunk(
  "updatePassword",
  async (body: UpdatePasswordThunkArgs, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `${BASE_URL}/api/v1/user/updatePassword`,
        body
      );
      return data;
    } catch (error) {
      // TODO: Can't dispatch message from here (error.response.data.message)
      const errorMessage = (error as AxiosError)?.response?.data;
      return rejectWithValue(errorMessage);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "forgotPassword",
  async (user: ForgotPasswordThunkArgs, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/api/v1/user/forgotPassword`,
        { user }
      );
      return data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "resetPassword",
  async (body: ResetPasswordThunkArgs) => {
    try {
      const axiosInstanceWithJWT = axios.create({
        headers: {
          Authorization: `Bearer ${body?.token}`,
          "Content-Type": "application/json",
        },
      });
      const { data } = await axiosInstanceWithJWT.patch(
        `${BASE_URL}/api/v1/user/resetPassword`,
        body?.password
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const checkJWTExpiry = createAsyncThunk(
  "checkJWTExpiry",
  async ({ token }: CheckJWTExpiryThunkArgs, { rejectWithValue }) => {
    try {
      const axiosInstanceWithJWT = axios.create({
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const { data } = await axiosInstanceWithJWT.post(
        `${BASE_URL}/api/v1/user/checkJWTExpiry`
      );
      return data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

// Add To Wishlist
export const toggleWishlist = createAsyncThunk(
  "toggleWishlist",
  async (
    { userId, productId }: { userId: string; productId: string },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axiosInstance.post(
        `${BASE_URL}/api/v1/user/toggleWishlist`,
        {
          userId,
          productId,
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") as string)
      : null,
    isError: false,
    errorMsg: "",
    updationComplete: false,
    emailSent: false,
    passwordReseted: false,
    jwtExpired: false,
  } as UserState,
  reducers: {
    logOut: (state) => {
      state.data = null;
      localStorage.removeItem("user");
    },
    resetError: (state) => {
      state.isError = false;
      state.errorMsg = "";
    },
    resetUpdationComplete: (state) => {
      state.updationComplete = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createSession.pending, (state) => {
      state.isLoading = true;
      state.data = null;
      state.isError = false;
    });
    builder.addCase(createSession.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
    builder.addCase(createSession.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isError = true;
      state.errorMsg = (action.payload as AxiosError).message;
    });

    builder.addCase(addUserAddress.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addUserAddress.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      localStorage.setItem("user", JSON.stringify(state.data));
    });
    builder.addCase(addUserAddress.rejected, () => {});

    // updateUser
    builder.addCase(updateUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.updationComplete = true;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isError = Boolean(action.payload);
      state.updationComplete = false;
    });

    // update password
    builder.addCase(updatePassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updatePassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(updatePassword.rejected, (state, action) => {
      state.isError = true;
      state.errorMsg = String(action.payload);
    });

    // Delete User Address
    builder.addCase(deleteUserAddress.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteUserAddress.fulfilled, (state, action) => {
      state.isLoading = false;
      if (state.data) state.data.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.data));
    });
    builder.addCase(deleteUserAddress.rejected, (state, action) => {
      state.isError = true;
      state.errorMsg = String(action.payload);
    });

    // Forgot Password
    builder.addCase(forgotPassword.pending, (state) => {
      state.isLoading = true;
      state.emailSent = false;
      state.isError = false;
    });
    builder.addCase(forgotPassword.fulfilled, (state) => {
      state.isLoading = false;
      state.emailSent = true;
    });
    builder.addCase(forgotPassword.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.emailSent = false;
    });

    // Add Case
    builder.addCase(resetPassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(resetPassword.fulfilled, (state) => {
      state.isLoading = false;
      state.passwordReseted = true;
    });
    builder.addCase(resetPassword.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.passwordReseted = false;
    });

    // Check JWT Expiry
    builder.addCase(checkJWTExpiry.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(checkJWTExpiry.fulfilled, (state) => {
      state.isLoading = false;
      state.jwtExpired = false;
    });
    builder.addCase(checkJWTExpiry.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.jwtExpired = true;
    });

    // Add To Wishlist
    builder.addCase(toggleWishlist.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(toggleWishlist.fulfilled, (state, action) => {
      if (state.data) state.data.user = action.payload;
      state.isLoading = false;
      localStorage.setItem("user", JSON.stringify(state.data));
    });
    builder.addCase(toggleWishlist.rejected, (state) => {
      state.isError = true;
      state.errorMsg = "Some error occured";
    });
  },
});

export const { logOut, resetError, resetUpdationComplete } = userSlice.actions;
export default userSlice.reducer;
