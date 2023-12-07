import { setStaticData } from "features/static/staticSlice";
import { store } from "./../store";
import apiFunction from "services/Api";

export const getStaticData = async () => {
  await apiFunction("static", { type: "get" }).then((res) => {
    if (res.status === 200) {
      store.dispatch(setStaticData(res?.data?.data));
    }
  });
};
