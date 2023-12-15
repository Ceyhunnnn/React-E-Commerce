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

function App() {
  const isAuth = TokenService.getToken();
  const getUser = async () => {
    await getUserData();
  };
  const getSettings = async () => {
    await getStaticData();
    await getCategoryData();
    await getDiscountProducts();
  };
  useEffect(() => {
    getSettings();
  }, []);

  useEffect(() => {
    PageTitle();
  }, [window.location.pathname]);

  useEffect(() => {
    if (isAuth) {
      getUser();
    }
  }, [isAuth]);

  return useRoutes(routes);
}

export default App;
