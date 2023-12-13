import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const discountSlice = createSlice({
  name: "discount",
  initialState,
  reducers: {
    setDiscountData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDiscountData } = discountSlice.actions;

export default discountSlice.reducer;
