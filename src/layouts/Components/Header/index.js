import React, { useState } from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import Container from "components/Container";
import { Link, NavLink } from "react-router-dom";
import {
  Badge,
  // Input,
  Popover,
  Select,
} from "antd";
import Config from "./../../../config";
import PathConstants from "PathConstants";
import PopoverContent from "./components/PopoverContent";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Hamburger } from "components/Icons/Icons";
import { useScreenSize } from "hooks/useScreenSize";
import { useSelector } from "react-redux";

function Header() {
  const [size] = useScreenSize();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const user = useSelector((state) => state.user.value);
  const headerMenu = [
    {
      id: 0,
      title: t("header.home"),
      link: PathConstants.HOME,
      hidden: false,
    },
    {
      id: 1,
      title: t("header.about"),
      link: PathConstants.ABOUT,
      hidden: false,
    },
    {
      id: 2,
      title: t("header.contact"),
      link: PathConstants.CONTACT,
      hidden: false,
    },
    {
      id: 3,
      title: t("header.signup"),
      link: PathConstants.SINGUP,
      hidden: user ? true : false,
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
  // const changeLanguage = async (val) => {
  //   await i18n.changeLanguage(val);
  // };

  return (
    <>
      <Container>
        <header className="header-area">
          <div className="header-content">
            <Link className="header-title" to="/">
              {t("exclusive")}
            </Link>
            <Hamburger
              onClick={() => setIsOpen((prev) => !prev)}
              width={30}
              height={30}
              className="hamburger-menu"
            />
            <div
              className={`${
                isOpen && size <= 674 ? "responsive-menu" : "menu-content"
              }`}
            >
              <div className="menu-area">
                {headerMenu.map((header) => (
                  <ul key={header.id}>
                    <li>
                      <NavLink
                        hidden={header.hidden}
                        onClick={() => setIsOpen(false)}
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
                <Select
                  optionLabelProp="label"
                  style={isOpen && { height: "24px" }}
                  options={selectOptions}
                  onChange={(val) => {
                    // changeLanguage(val);
                    setIsOpen(false);
                  }}
                  defaultValue={Config.lang.default}
                />
                <Link to={PathConstants.SHOP_BASKET}>
                  <Badge count={0}>
                    <ShoppingCartOutlined style={{ fontSize: "20px" }} />
                  </Badge>
                </Link>
                {user && (
                  <>
                    <Popover
                      placement="bottomRight"
                      title={Config.app.title}
                      content={<PopoverContent />}
                      arrow={false}
                    >
                      <UserOutlined style={{ fontSize: "20px" }} />
                    </Popover>
                  </>
                )}
              </div>
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
