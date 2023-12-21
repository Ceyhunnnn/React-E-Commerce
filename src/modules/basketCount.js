import { setBasketSize } from "features/basketSize/basketSlice";
import { store } from "./../store";

export const basketSizeChange = (value) => {
  store.dispatch(setBasketSize(value));
};
