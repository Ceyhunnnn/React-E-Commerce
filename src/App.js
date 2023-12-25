/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { getStaticData } from "modules/static";
import { getUserData } from "modules/signUp";
import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "routes";
import TokenService from "services/TokenService";
import PageTitle from "utils/PageTitle";
import { getCategoryData } from "modules/category";
import { getDiscountProducts } from "modules/discountProducts";
import StorageService from "services/StorageService";
import apiFunction from "services/Api";
import { useSelector } from "react-redux";
import { getUserBasketList } from "modules/basketItems";

function App() {
  const localData = StorageService.getStorage("basket");
  const user = useSelector((state) => state.user.value);
  const basket = useSelector((state) => state.basket.value);
  const isAuth = TokenService.getToken();
  const basketLocalStorage = JSON.stringify(
    StorageService.getStorage("basket")
  );

  const setRequiredData = async () => {
    await getStaticData();
    await getCategoryData();
    await getDiscountProducts();
    if (basketLocalStorage === "null" || basketLocalStorage?.length <= 0) {
      StorageService.setStorage("basket", JSON.stringify([]));
    }
  };
  const setBasket = async () => {
    const body = {
      userId: user._id,
      basketList: JSON.parse(localData),
    };
    await apiFunction(`createBasket/${user._id}`, {
      body,
      type: "post",
    }).then((res) => {
      StorageService.setStorage("basket", JSON.stringify([]));
    });
  };
  const updateBasket = async () => {
    const body = {
      updatedList: JSON.parse(localData),
    };
    await apiFunction(`updateBasket/${user._id}`, { body, type: "patch" }).then(
      async (res) => {
        StorageService.setStorage("basket", JSON.stringify([]));
        await getUserBasketList(user._id);
      }
    );
  };
  const checkToUserBasket = async () => {
    if (basket && JSON.parse(localData).length >= 1) {
      await updateBasket();
    } else {
      await setBasket();
    }
  };

  useEffect(() => {
    if (user && JSON.parse(localData).length >= 1) {
      checkToUserBasket();
    }
  }, [user]);
  useEffect(() => {
    async function getUserBasket(userId) {
      await getUserBasketList(userId);
    }
    if (user) {
      getUserBasket(user._id);
    }
  }, [user]);

  useEffect(() => {
    PageTitle();
  }, [window.location.pathname]);
  useEffect(() => {
    setRequiredData();
    async function getUser() {
      await getUserData();
    }
    if (isAuth) {
      getUser();
    }
  }, []);
  return useRoutes(routes);
}

export default App;
