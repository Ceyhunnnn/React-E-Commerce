import Container from "components/Container";
import Footer from "layouts/Components/Footer";
import Header from "layouts/Components/Header";
import TopHeader from "layouts/Components/TopHeader";
import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <TopHeader />
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default MainLayout;
