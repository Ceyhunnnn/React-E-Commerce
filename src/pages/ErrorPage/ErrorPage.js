import React from "react";
import "./ErrorPage.css";
import { useTranslation } from "react-i18next";
import Button from "components/Button";
import { useNavigate } from "react-router-dom";
import PathConstants from "PathConstants";
function ErrorPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <main className="error-area">
        <p className="font-36">{t("error.title")}</p>
        <p className="font-16">{t("error.desc")}</p>
        <Button
          title={t("error.buttonText")}
          onClick={() => navigate(PathConstants.HOME)}
        />
      </main>
    </>
  );
}

export default ErrorPage;
