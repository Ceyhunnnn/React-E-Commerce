import { store } from "./../store";
import apiFunction from "services/Api";
import { setBasketItems } from "features/basketItems/basketitemsSlice";

export const getUserBasketList = async (userId) => {
  await apiFunction(`getUserBasket/${userId}`).then(async (res) => {
    if (res.status === 200) {
      store.dispatch(setBasketItems(res?.data?.data[0]?.basketList));
    }
  });
};
