import PathConstants from "PathConstants";
import React from "react";
import { Navigate } from "react-router-dom";
import TokenService from "services/TokenService";

function PublicLayout({ element }) {
  const isAuth = TokenService.getToken();
  return !isAuth ? element : <Navigate to={PathConstants.HOME} />;
}

export default PublicLayout;
