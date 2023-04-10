import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../helper/url";

export const updateUserPassword = createAsyncThunk(
  "updateUserPassword",
  async () => {
    try {
      const { data } = axios.put(`${BASE_URL}/api/v1/user/`);
    } catch (error) {
      console.log(error);
    }
  }
);

const updatePassword = createSlice({
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    errMsg: null,
  },
  extraReducers: {},
});

export default updatePassword.reducer;
