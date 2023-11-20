import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import Container from "components/Container";
import { Heart, ShoppingVehicle } from "components/Icons/Icons";
import { Link, NavLink } from "react-router-dom";
import { Select } from "antd";
import Config from "./../../config";
import PathConstants from "PathConstants";
function Header() {
  const { t } = useTranslation();
  const headerMenu = [
    {
      id: 0,
      title: t("header.home"),
      link: PathConstants.HOME,
    },
    {
      id: 1,
      title: t("header.about"),
      link: PathConstants.ABOUT,
    },
    {
      id: 2,
      title: t("header.contact"),
      link: PathConstants.CONTACT,
    },
    {
      id: 3,
      title: t("header.signup"),
      link: PathConstants.SINGUP,
    },
  ];
  const selectOptions = [
    {
      value: "en",
      label: t("languages.en"),
    },
    {
      value: "tr",
      label: t("languages.tr"),
    },
  ];
  return (
    <>
      <Container>
        <header className="header-area">
          <div className="header-content">
            <Link className="header-title" to="/">
              {t("exclusive")}
            </Link>
            <div className="menu-area">
              {headerMenu.map((header) => (
                <ul key={header.id}>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "is-active" : "is-not-active"
                      }
                      to={header.link}
                    >
                      {header.title}
                    </NavLink>
                  </li>
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

              <Select
                options={selectOptions}
                defaultValue={Config.lang.default}
              />
            </div>
          </div>
        </header>
      </Container>
      <hr
        style={{ margin: "10px 0px 0px 0px", borderTop: "1px solid #ccc" }}
      ></hr>
    </>
  );
}

export default Header;
