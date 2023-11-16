import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import Container from "components/Container";
import { Heart, ShoppingVehicle } from "components/Icons";
function Header() {
  const { t } = useTranslation();
  const headerMenu = [
    {
      id: 0,
      title: t("header.home"),
      link: "/",
    },
    {
      id: 1,
      title: t("header.about"),
      link: "/about",
    },
    {
      id: 2,
      title: t("header.contact"),
      link: "/contact",
    },
    {
      id: 3,
      title: t("header.signup"),
      link: "/signup",
    },
  ];
  return (
    <>
      <Container>
        <header className="header-area">
          <div className="header-content">
            <h1 className="header-title">{t("exclusive")}</h1>
            <div className="menu-area">
              {headerMenu.map((header) => (
                <ul key={header.id}>
                  <li>{header.title}</li>
                </ul>
              ))}
            </div>
            <div className="right-area">
              <input
                placeholder="What are you looking for?"
                className="search-input"
              />
              <Heart width={22} height={22} />
              <ShoppingVehicle width={25} height={25} />
              <select name="languages" className="language-select">
                <option>English</option>
                <option>Turkish</option>
              </select>
            </div>
          </div>
        </header>
      </Container>
      <hr></hr>
    </>
  );
}

export default Header;
