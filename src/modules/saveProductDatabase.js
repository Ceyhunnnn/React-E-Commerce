import apiFunction from "services/Api";
import { addedToCard, alreadyAdded } from "./notifications";
import { store } from "./../store";
import { getUserBasketList } from "./basketItems";

export const saveProductDatabase = async (fullObject) => {
  const user = store.getState().user.value;
  const basket = store.getState().basket.value;
  const isItemIncludes = basket?.basketList?.filter(
    (item) => item._id === fullObject._id
  );
  if (isItemIncludes?.length === 0 || isItemIncludes === undefined) {
    const body = {
      userId: user?._id,
      item: fullObject,
    };
    await apiFunction("addItemToBasket", { body, type: "post" }).then(
      async (res) => {
        if (res.status === 200) {
          addedToCard();
          await getUserBasketList(user?._id);
        }
      }
    );
  } else {
    alreadyAdded();
  }
};
