import React, { useRef } from "react";
import "./HomePage.css";
import { useTranslation } from "react-i18next";
import GeneralTitle from "components/GeneralTitle";
import CountdownTimer from "utils/CountdownTimer";
import ShoppingCard from "components/ShoppingCard";
import { Carousel } from "antd";
import Button from "components/Button";
import { useScreenSize } from "hooks/useScreenSize";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "components/Loading/Loading";
import PathConstants from "PathConstants";

function Home() {
  const discountProduct = useSelector((state) => state.discount.value);
  const categories = useSelector((state) => state.category.value);
  const [size] = useScreenSize();
  const carouselRef = useRef();
  const { t } = useTranslation();
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  const carouselViewPage = () => {
    if (size < 576) {
      return 1;
    }
    if (size > 576 && size < 992) {
      return 2;
    }
    if (size > 993 && size < 1028) {
      return 3;
    }
    return 4;
  };

  if (!discountProduct) {
    return <Loading />;
  }
  return (
    <>
      <div className="page-content">
        <aside className="aside-menu">
          {categories?.map((cat) => (
            <Link
              state={{ id: cat._id, title: cat.name }}
              className="category"
              to={cat.slug}
              key={cat._id}
            >
              {cat.name}
            </Link>
          ))}
        </aside>
        <main className="main-area">
          <Carousel autoplay draggable>
            <img src="/images/slider1.png" alt="SliderImages" />
            <img src="/images/slider1.png" alt="SliderImages" />
            <img src="/images/slider1.png" alt="SliderImages" />
            <img src="/images/slider1.png" alt="SliderImages" />
            <img src="/images/slider1.png" alt="SliderImages" />
          </Carousel>
        </main>
      </div>
      <GeneralTitle title={t("todays")} />
      <div className="sales-content">
        <div className="sales-area">
          <h1 className="sales-title">{t("sales")}</h1>
          <div className="time">
            <CountdownTimer targetDate={dateTimeAfterThreeDays} />
          </div>
        </div>
        <div className="slider-area">
          <LeftOutlined
            className="arrow-circle"
            onClick={() => carouselRef.current.prev()}
          />
          <RightOutlined
            className="arrow-circle"
            onClick={() => carouselRef.current.next()}
          />
        </div>
      </div>
      <Carousel
        ref={carouselRef}
        className="shop-slider-area"
        centerPadding="35"
        slidesToShow={carouselViewPage()}
        draggable
        centerMode={size < 590 ? true : false}
        dots={false}
      >
        {discountProduct.map((dc) => (
          <ShoppingCard
            fullObject={dc}
            key={dc._id}
            id={dc._id}
            name={dc.name}
            cover_photo={dc.cover_photo}
            price={dc.price}
            discount={dc.discount}
          />
        ))}
      </Carousel>

      <div className="button-area">
        <Link to={PathConstants.ALL_PRODUCTS}>
          <Button title={t("viewAllProducts")} />
        </Link>
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
    </>
  );
}

export default Home;
