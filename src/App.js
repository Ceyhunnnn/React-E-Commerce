/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import Loading from "components/Loading/Loading";
import { getUserData } from "modules/signUp";
import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "routes";
import TokenService from "services/TokenService";
import PageTitle from "utils/PageTitle";

function App() {
  const isAuth = TokenService.getToken();
  const [loading, setLoading] = useState(false);
  const getUser = async () => {
    setLoading(true);
    await getUserData();
    setLoading(false);
  };
  useEffect(() => {
    PageTitle();
  }, [window.location.pathname]);
  useEffect(() => {
    if (isAuth) {
      getUser();
    }
  }, [isAuth]);
  if (loading) {
    return <Loading />;
  }
  return useRoutes(routes);
}

export default App;
