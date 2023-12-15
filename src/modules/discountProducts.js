import { setDiscountData } from "features/discountProducts/discountSlice";
import { store } from "./../store";
import apiFunction from "services/Api";

export const getDiscountProducts = async () => {
  await apiFunction("getDiscountProducts", { type: "get" }).then((res) => {
    if (res.data.success) store.dispatch(setDiscountData(res.data.data));
  });
};
