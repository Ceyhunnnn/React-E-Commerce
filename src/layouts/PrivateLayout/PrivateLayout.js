import PathConstants from "PathConstants";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateLayout({ element }) {
  const user = useSelector((state) => state.user.value);
  return !user ? element : <Navigate to={PathConstants.HOME} />;
}

export default PrivateLayout;
