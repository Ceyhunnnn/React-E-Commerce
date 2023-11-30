import PathConstants from "PathConstants";
import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ element }) {
  const isAuth = 1;
  return isAuth ? element : <Navigate to={PathConstants.HOME} />;
}

export default PrivateRoute;
