import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import Container from "components/Container";
import { Link, NavLink } from "react-router-dom";
import { Input, Popover, Select } from "antd";
import Config from "./../../config";
import PathConstants from "PathConstants";
import PopoverContent from "./components/PopoverContent";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

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
  const onSearch = (value, _e, info) => console.log(info?.source, value);

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
              <Input.Search
                placeholder="Search"
                allowClear
                size="middle"
                onSearch={onSearch}
              />
              <Select
                options={selectOptions}
                defaultValue={Config.lang.default}
              />
              <HeartOutlined style={{ fontSize: "20px" }} />
              <ShoppingCartOutlined style={{ fontSize: "20px" }} />
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
        </header>
      </Container>
      <hr
        style={{ margin: "10px 0px 0px 0px", borderTop: "1px solid #ccc" }}
      ></hr>
    </>
  );
}

export default Header;
