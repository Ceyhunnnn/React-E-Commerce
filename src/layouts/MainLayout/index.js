import TopHeader from "layouts/TopHeader";
import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <TopHeader />
      <Outlet />
    </>
  );
}

export default MainLayout;
