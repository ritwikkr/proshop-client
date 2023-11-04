import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../helper/url";
import axiosInstanceWithJWT from "../../helper/axiosInstanceWithJWT";

// Action
export const createSession = createAsyncThunk(
  "createSession",
  async ({ sessionType, userData }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/user/${sessionType}`,
        userData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addUserAddress = createAsyncThunk(
  "addUserAddress",
  async (body) => {
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
  async (body) => {
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

export const updateUser = createAsyncThunk("updateUser", async (body) => {
  const response = await axios.put(`${BASE_URL}/api/v1/user/update`, body);
  return response.data;
});

export const updatePassword = createAsyncThunk(
  "updatePassword",
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `${BASE_URL}/api/v1/user/updatePassword`,
        body
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "forgotPassword",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/api/v1/user/forgotPassword`,
        { user }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const resetPassword = createAsyncThunk("resetPassword", async (body) => {
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
});

export const checkJWTExpiry = createAsyncThunk(
  "checkJWTExpiry",
  async ({ token }, { rejectWithValue }) => {
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
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    isError: false,
    errorMsg: "",
    updationComplete: false,
    emailSent: false,
    passwordReseted: false,
    jwtExpired: false,
  },
  reducers: {
    logOut: (state, action) => {
      state.data = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createSession.pending, (state, action) => {
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
      state.isError = action.payload.error;
    });

    builder.addCase(addUserAddress.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addUserAddress.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      localStorage.setItem("user", JSON.stringify(state.data));
    });
    builder.addCase(addUserAddress.rejected, (state, action) => {});

    // updateUser
    builder.addCase(updateUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.updationComplete = true;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isError = action.payload;
      state.updationComplete = false;
    });

    // update password
    builder.addCase(updatePassword.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updatePassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(updatePassword.rejected, (state, action) => {
      state.isError = true;
      state.errorMsg = action.payload;
    });

    // Delete User Address
    builder.addCase(deleteUserAddress.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteUserAddress.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.data));
    });
    builder.addCase(deleteUserAddress.rejected, (state, action) => {
      state.isError = true;
      state.errorMsg = action.payload;
    });

    // Forgot Password
    builder.addCase(forgotPassword.pending, (state, action) => {
      state.isLoading = true;
      state.emailSent = false;
      state.isError = false;
    });
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.emailSent = true;
    });
    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.emailSent = false;
    });

    // Add Case
    builder.addCase(resetPassword.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.passwordReseted = true;
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
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
  },
});

export const { logOut } = userSlice.actions;
export default userSlice.reducer;
