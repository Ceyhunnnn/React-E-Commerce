import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const staticSlice = createSlice({
  name: "static",
  initialState,
  reducers: {
    setStaticData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setStaticData } = staticSlice.actions;

export default staticSlice.reducer;
