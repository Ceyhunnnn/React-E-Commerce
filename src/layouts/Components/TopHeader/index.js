import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
function TopHeader() {
  const { t } = useTranslation();
  return (
    <div className="header">
      <p>{t("topHeader.summer")}</p>
      <p className="shop-title">{t("topHeader.shopNow")}</p>
    </div>
  );
}

export default TopHeader;
