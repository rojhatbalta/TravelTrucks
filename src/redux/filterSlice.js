import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  ac: "",
  transmission: "",
  tv: "",
  bathroom: "",
  kitchen: "",
  form: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateFilters(state, action) {
      return { ...state, ...action.payload };
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { updateFilters, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
