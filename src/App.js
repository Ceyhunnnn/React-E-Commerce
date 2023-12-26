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
import { useDispatch, useSelector } from "react-redux";
import { getUserBasketList } from "modules/basketItems";
import { setBasketItems } from "features/basketItems/basketitemsSlice";

function App() {
  const dispatch = useDispatch();
  const basketParseData = JSON.parse(StorageService.getStorage("basket"));
  const user = useSelector((state) => state.user.value);
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
      basketList: basketParseData,
    };
    await apiFunction(`createBasket/${user._id}`, {
      body,
      type: "post",
    }).then(async (res) => {
      await getUserBasketList(user._id);
    });
  };
  const updateBasket = async () => {
    const body = {
      updatedList: basketParseData,
    };
    await apiFunction(`updateBasket/${user._id}`, { body, type: "patch" }).then(
      async (res) => {
        await getUserBasketList(user._id);
      }
    );
  };
  const checkToUserBasket = async () => {
    await apiFunction(`getUserBasket/${user._id}`).then(async (res) => {
      dispatch(setBasketItems(res?.data?.data[0]?.basketList));
      if (res?.data?.data?.length && basketParseData.length >= 1) {
        await updateBasket();
        StorageService.setStorage("basket", JSON.stringify([]));
      } else if (basketParseData.length >= 1) {
        await setBasket();
        StorageService.setStorage("basket", JSON.stringify([]));
      }
    });
  };

  useEffect(() => {
    if (user) {
      checkToUserBasket();
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
