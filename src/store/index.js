import { configureStore } from "@reduxjs/toolkit";
import settingSlice from "features/settings/settingsSlice";
import userSlice from "features/user/userSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    setting: settingSlice,
  },
});
