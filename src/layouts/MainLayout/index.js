import Footer from "layouts/Footer";
import Header from "layouts/Header";
import TopHeader from "layouts/TopHeader";
import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <TopHeader />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
