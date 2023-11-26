import React, { useState } from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import Container from "components/Container";
import { Link, NavLink } from "react-router-dom";
import {
  // Input,
  Popover,
  Select,
} from "antd";
import Config from "./../../config";
import PathConstants from "PathConstants";
import PopoverContent from "./components/PopoverContent";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Hamburger } from "components/Icons/Icons";
import { useScreenSize } from "hooks/useScreenSize";

function Header() {
  const [size] = useScreenSize();
  const [isOpen, setIsOpen] = useState(false);
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
  // const onSearch = (value, _e, info) => console.log(info?.source, value);
  const handleClick = () => {
    setIsOpen((prev) => {
      if (!prev) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.removeAttribute("style");
      }
      return !prev;
    });
  };
  console.log(size);
  return (
    <>
      <Container>
        <header className="header-area">
          <div className="header-content">
            <Link className="header-title" to="/">
              {t("exclusive")}
            </Link>
            <Hamburger
              onClick={handleClick}
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
                  style={isOpen && { height: "24px" }}
                  options={selectOptions}
                  onChange={() => setIsOpen(false)}
                  defaultValue={Config.lang.default}
                />
                <HeartOutlined style={{ fontSize: "20px" }} />
                <Link to={PathConstants.SHOP_BASKET}>
                  <ShoppingCartOutlined style={{ fontSize: "20px" }} />
                </Link>
                <Popover
                  placement="bottomRight"
                  title={Config.app.title}
                  content={<PopoverContent />}
                  arrow={false}
                >
                  <UserOutlined style={{ fontSize: "20px" }} />
                </Popover>
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
