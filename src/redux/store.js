import { configureStore } from "@reduxjs/toolkit";
import truckReducer from "./truckSlice";
import filterReducer from "./filterSlice";
import favourite from "./favouriteSlice";

export const store = configureStore({
  reducer: {
    truck: truckReducer,
    filter: filterReducer,
    favourite: favourite,
  },
});
