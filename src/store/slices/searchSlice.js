import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchTerm",
  initialState: {
    searchText: "",
  },
  reducers: {
    // actions
    addSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { addSearchText } = searchSlice.actions;
export default searchSlice.reducer;
