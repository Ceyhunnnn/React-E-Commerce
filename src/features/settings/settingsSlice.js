import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setSettingsData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSettingsData } = settingSlice.actions;

export default settingSlice.reducer;
