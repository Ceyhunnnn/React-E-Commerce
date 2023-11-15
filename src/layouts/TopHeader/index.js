import React from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
function TopHeader() {
  const { t } = useTranslation();
  return (
    <div className="header">
      {t("topHeader.summer")}
      <b>
        <u>{t("shopNow")}</u>
      </b>
    </div>
  );
}

export default TopHeader;
