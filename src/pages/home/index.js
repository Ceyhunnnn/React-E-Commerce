import React from "react";
import "./index.css";
import Container from "components/Container";
import { useTranslation } from "react-i18next";
import GeneralTitle from "components/GeneralTitle";
import CountdownTimer from "utils/CountdownTimer";
import { ArrowLeft, ArrowRight } from "components/Icons";
function Home() {
  const { t } = useTranslation();
  const categories = [
    {
      id: 0,
      title: t("mainMenuCategories.fashion"),
    },
    {
      id: 1,
      title: t("mainMenuCategories.menFashion"),
    },
    {
      id: 2,
      title: t("mainMenuCategories.electronics"),
    },
    {
      id: 3,
      title: t("mainMenuCategories.home"),
    },
    {
      id: 4,
      title: t("mainMenuCategories.medicine"),
    },
    {
      id: 5,
      title: t("mainMenuCategories.sport"),
    },
    {
      id: 6,
      title: t("mainMenuCategories.baby"),
    },
    {
      id: 7,
      title: t("mainMenuCategories.pets"),
    },
    {
      id: 8,
      title: t("mainMenuCategories.healthy"),
    },
  ];
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <Container>
      <div className="page-content">
        <aside className="aside-menu">
          {categories.map((cat) => (
            <div key={cat.id}>{cat.title}</div>
          ))}
        </aside>
        <main className="main-area">
          <img src="/images/slider1.png" alt="SliderImages" />
        </main>
      </div>
      <GeneralTitle title="Today’s" />
      <div className="sales-content">
        <div className="sales-area">
          <h1 className="sales-title">{t("sales")}</h1>
          <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        </div>
        <div className="slider-area">
          <ArrowLeft className="arrow-circle" />
          <ArrowRight className="arrow-circle" />
        </div>
      </div>
    </Container>
  );
}

export default Home;
