/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "routes";
import PageTitle from "utils/PageTitle";

function App() {
  useEffect(() => {
    PageTitle();
  }, [window.location.pathname]);
  return useRoutes(routes);
}

export default App;
