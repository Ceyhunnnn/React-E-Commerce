import React from "react";
import { useTranslation } from "react-i18next";
import { UserOutlined, StarOutlined, LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import PathConstants from "PathConstants";
function PopoverContent() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const logout = () => {};
  const menuItems = [
    {
      id: 0,
      title: t("accountMenu.account"),
      icon: <UserOutlined />,
      onclick: () => navigate(PathConstants.ACCOUNT),
    },
    {
      id: 1,
      title: t("accountMenu.myReviews"),
      icon: <StarOutlined />,
    },
    {
      id: 2,
      title: t("accountMenu.logout"),
      icon: <LogoutOutlined />,
      onclick: logout,
    },
  ];
  return (
    <div>
      <hr></hr>
      {menuItems.map((menu) => {
        return (
          <div
            key={menu.id}
            onClick={menu.onclick}
            className="display-flex popover-item"
          >
            {menu.icon}
            <p>{menu.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PopoverContent;
