import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  truckList: [],
};
const truckSlice = createSlice({
  name: "truck",
  initialState,
  reducers: {
    clearTruckList(state) {
      state.truckList = [];
    },
    setTruckList(state, action) {
      state.truckList = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { clearTruckList, setTruckList, setLoading } = truckSlice.actions;
export default truckSlice.reducer;
