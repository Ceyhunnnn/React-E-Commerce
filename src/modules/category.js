import { setCategoryData } from "features/category/categorySlice";
import { store } from "./../store";
import apiFunction from "services/Api";

export const getCategoryData = async () => {
  await apiFunction("categories", { type: "get" }).then((res) => {
    if (res.status === 200) {
      store.dispatch(setCategoryData(res?.data?.data));
    }
  });
};
