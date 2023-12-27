import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const basketitemSlice = createSlice({
  name: "basketItems",
  initialState,
  reducers: {
    setBasketItems: (state, action) => {
      state.value = action.payload;
      // console.log(action.payload.basketList);
    },
  },
});

export const { setBasketItems } = basketitemSlice.actions;

export default basketitemSlice.reducer;
