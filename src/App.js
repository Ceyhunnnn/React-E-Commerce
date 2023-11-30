/* eslint-disable react-hooks/exhaustive-deps */
import Loading from "components/Loading/Loading";
import { setUserData } from "features/user/userSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRoutes } from "react-router-dom";
import routes from "routes";
import apiFunction from "services/Api";
import TokenService from "services/TokenService";
import PageTitle from "utils/PageTitle";

function App() {
  const isAuth = TokenService.getToken();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    PageTitle();
  }, [window.location.pathname]);
  useEffect(() => {
    if (isAuth) {
      setLoading(true);
      apiFunction("me", { body: "", type: "get" }).then((res) => {
        if (res.status === 200) {
          dispatch(setUserData(res.data.data));
        }
        setLoading(false);
      });
    }
  }, [isAuth]);
  if (loading) {
    <Loading />;
  }
  return useRoutes(routes);
}

export default App;
