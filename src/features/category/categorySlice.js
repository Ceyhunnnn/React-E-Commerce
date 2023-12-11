import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCategoryData } = categorySlice.actions;

export default categorySlice.reducer;
