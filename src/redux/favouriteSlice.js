import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const storedItems = localStorage.getItem("favoriteItems");
  return storedItems ? JSON.parse(storedItems) : [];
};
const initialState = {
  items: loadFromLocalStorage(),
};
const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload;
      if (state.items.includes(id)) {
        state.items = state.items.filter((favId) => favId !== id);
      } else {
        state.items.push(id);
      }
      localStorage.setItem("favoriteItems", JSON.stringify(state.items));
    },
  },
});

export const { toggleFavorite, clearFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
