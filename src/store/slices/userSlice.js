import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../helper/url";

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
    const response = await axios.put(
      `${BASE_URL}/api/v1/user/addAddress`,
      body
    );
    localStorage.setItem("user", JSON.stringify(response.data));
  }
);

export const updateUser = createAsyncThunk("updateUser", async (body) => {
  const response = await axios.put(`${BASE_URL}/api/v1/user/update`, body);
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    isError: false,
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
      console.log(action.payload);
      state.isLoading = false;
      state.data = null;
      state.isError = action.payload.err;
    });

    builder.addCase(addUserAddress.pending, (state, action) => {});
    // updateUser
    builder.addCase(updateUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isError = action.payload;
    });
  },
});

export const { logOut } = userSlice.actions;
export default userSlice.reducer;
