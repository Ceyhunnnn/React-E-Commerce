import { configureStore } from "@reduxjs/toolkit";
import basketitemSlice from "features/basketItems/basketitemsSlice";
import basketSlice from "features/basketSize/basketSlice";
import categorySlice from "features/category/categorySlice";
import discountSlice from "features/discountProducts/discountSlice";
import staticSlice from "features/static/staticSlice";
import userSlice from "features/user/userSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    setting: staticSlice,
    category: categorySlice,
    discount: discountSlice,
    basketSize: basketSlice,
    basket: basketitemSlice,
  },
});
