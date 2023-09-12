import { createSlice } from "@reduxjs/toolkit";

const showNavPopup = createSlice({
  name: "showNavPopup",
  initialState: {
    show: false,
  },
  reducers: {
    togglePopUp: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const { togglePopUp } = showNavPopup.actions;
export default showNavPopup.reducer;
