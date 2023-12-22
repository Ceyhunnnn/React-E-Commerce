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

function App() {
  const basketLocalStorage = JSON.stringify(
    StorageService.getStorage("basket")
  );
  const isAuth = TokenService.getToken();
  const getUser = async () => {
    await getUserData();
  };
  const getRequiredData = async () => {
    await getStaticData();
    await getCategoryData();
    await getDiscountProducts();
    if (basketLocalStorage === "null" || basketLocalStorage?.length <= 0) {
      StorageService.setStorage("basket", JSON.stringify([]));
    }
  };
  useEffect(() => {
    PageTitle();
  }, [window.location.pathname]);

  useEffect(() => {
    getRequiredData();
    if (isAuth) {
      getUser();
    }
  }, [isAuth]);

  return useRoutes(routes);
}

export default App;
