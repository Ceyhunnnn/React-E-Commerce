import React, { useRef } from "react";
import "./HomePage.css";
import Container from "components/Container";
import { useTranslation } from "react-i18next";
import GeneralTitle from "components/GeneralTitle";
import CountdownTimer from "utils/CountdownTimer";
import { ArrowLeft, ArrowRight } from "components/Icons/Icons";
import ShoppingCard from "components/ShoppingCard";
import { Carousel } from "antd";
import Button from "components/Button";
import CategoriesCard from "components/CategoriesCard";
import { useScreenSize } from "hooks/useScreenSize";

function Home() {
  const [size] = useScreenSize();
  const carouselRef = useRef();
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
  function carouselViewPage() {
    if (size < 576) {
      return 1;
    }
    if (size > 576 && size < 992) {
      return 3;
    }
    return 4;
  }

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
      <GeneralTitle title={t("todays")} />
      <div className="sales-content">
        <div className="sales-area">
          <h1 className="sales-title">{t("sales")}</h1>
          <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        </div>
        <div className="slider-area">
          <ArrowLeft
            className="arrow-circle"
            onClick={() => carouselRef.current.prev()}
          />
          <ArrowRight
            className="arrow-circle"
            onClick={() => carouselRef.current.next()}
          />
        </div>
      </div>
      <Carousel
        ref={carouselRef}
        className="shop-slider-area"
        slidesToShow={carouselViewPage()}
        draggable
        dots={false}
      >
        <ShoppingCard />
        <ShoppingCard />
        <ShoppingCard />
        <ShoppingCard />
        <ShoppingCard />
      </Carousel>
      <div className="button-area">
        <Button title={t("viewAllProducts")} />
      </div>
      <hr style={{ margin: "50px 0px" }}></hr>
      <GeneralTitle title={t("categoriesTitle")} />
      <h1 className="sales-title">{t("categories")}</h1>
      <div className="categories-area">
        <CategoriesCard path={"/images/cell.png"} name="Phones" />
        <CategoriesCard path={"/images/computer.png"} name="Computer" />
        <CategoriesCard path={"/images/smart.png"} name="SmartWatch" />
        <CategoriesCard path={"/images/camera.png"} name="Camera" />
        <CategoriesCard path={"/images/headphone.png"} name="HeadPhones" />
        <CategoriesCard path={"/images/game.png"} name="Gaming" />
      </div>
      <hr style={{ margin: "50px 0px" }}></hr>
      <GeneralTitle title={t("featured")} />
      <h1 className="sales-title">{t("arrival")}</h1>
      <div className="arrival">
        <div className="content1">
          <img src="/images/ps5.svg" className="content-image" alt="Ps5Photo" />
          <p className="content-title">Play Station 5</p>
          <p>Black and White version of the PS5 coming out on sale.</p>
          <u>Shop Now</u>
        </div>
        <div className="content2">
          <img
            src="/images/woman.svg"
            className="content-image"
            alt="WomanPhoto"
          />
          <p className="content-title">Women’s Collections</p>
          <p>Featured woman collections that give you another vibe.</p>
          <u>Shop Now</u>
        </div>
        <div className="content3">
          <img
            src="/images/speakers.svg"
            className="content-image-middle"
            alt="WomanPhoto"
          />
          <p className="content-title">Speakers</p>
          <p>Amazon wireless speakers</p>
          <u>Shop Now</u>
        </div>
        <div className="content4">
          <img
            src="/images/parfume.svg"
            className="content-image-middle"
            alt="WomanPhoto"
          />
          <p className="content-title">Perfume</p>
          <p>GUCCI INTENSE OUD EDP</p>
          <u>Shop Now</u>
        </div>
      </div>
    </Container>
  );
}

export default Home;
