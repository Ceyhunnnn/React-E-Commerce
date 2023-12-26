import StorageService from "services/StorageService";
import { basketSizeChange } from "./basketCount";
import { addedToCard, alreadyAdded } from "./notifications";

export const saveProductLocalstorage = (fullObject) => {
  basketSizeChange(1);
  const initialList = JSON.parse(StorageService.getStorage("basket"));
  if (initialList?.length <= 0) {
    StorageService.setStorage("basket", JSON.stringify([fullObject]));
    addedToCard();
  } else {
    if (
      initialList.filter((prod) => prod._id === fullObject._id)?.length <= 0
    ) {
      const tempList = [...initialList];
      tempList.push(fullObject);
      StorageService.setStorage("basket", JSON.stringify(tempList));
      addedToCard();
    } else {
      alreadyAdded();
    }
  }
};
