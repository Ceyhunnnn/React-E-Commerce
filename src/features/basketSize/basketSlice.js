import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const basketsizeSlice = createSlice({
  name: "basketSize",
  initialState,
  reducers: {
    setBasketSize: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { setBasketSize } = basketsizeSlice.actions;

export default basketsizeSlice.reducer;
