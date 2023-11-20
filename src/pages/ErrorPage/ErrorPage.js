import Container from "components/Container";
import React from "react";
import "./ErrorPage.css";
import { useTranslation } from "react-i18next";
import Button from "components/Button";
import { useNavigate } from "react-router-dom";
function ErrorPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Container>
      <main className="error-area">
        <p className="font-36">{t("error.title")}</p>
        <p className="font-16">{t("error.desc")}</p>
        <Button title={t("error.buttonText")} onClick={() => navigate("/")} />
      </main>
    </Container>
  );
}

export default ErrorPage;
