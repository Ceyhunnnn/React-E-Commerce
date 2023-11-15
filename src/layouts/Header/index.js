import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import Container from "components/Container";
function Header() {
  const { t } = useTranslation();
  const headerMenu = [
    {
      id: 0,
      title: t("header.home"),
    },
    {
      id: 1,
      title: t("header.about"),
    },
    {
      id: 2,
      title: t("header.contact"),
    },
    {
      id: 3,
      title: t("header.signup"),
    },
  ];
  return (
    <Container>
      <div className="header-area">
        <h1>{t("exclusive")}</h1>
        <span>liste alani</span>
        <span>search - sepet</span>
      </div>
    </Container>
  );
}

export default Header;
