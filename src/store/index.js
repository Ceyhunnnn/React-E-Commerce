import { configureStore } from "@reduxjs/toolkit";
import staticSlice from "features/static/staticSlice";
import userSlice from "features/user/userSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    setting: staticSlice,
  },
});
