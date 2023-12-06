import { setSettingsData } from "features/settings/settingsSlice";
import { store } from "./../store";
import apiFunction from "services/Api";

export const getAllSettings = async () => {
  await apiFunction("static", { type: "get" }).then((res) => {
    if (res.status === 200) {
      store.dispatch(setSettingsData(res.data.data));
    }
  });
};
