import React, { useEffect, useState } from "react";
import "./ProductDetailPage.css";
import Button from "components/Button";
import { Heart, Loop, Truck } from "components/Icons/Icons";
import { useTranslation } from "react-i18next";
import { Carousel, Divider } from "antd";
import GeneralTitle from "components/GeneralTitle";
import ShoppingCard from "components/ShoppingCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import apiFunction from "services/Api";
import PathConstants from "PathConstants";
import Loading from "components/Loading/Loading";
function ProductDetailPage() {
  const [data, setData] = useState();
  const { id } = useParams();
  const discountProduct = useSelector((state) => state.discount.value);
  const { t } = useTranslation();
  const [selectedImg, setSelectedImg] = useState();
  const [selectedCount, setSelectedCount] = useState(1);
  const imgList = [
    {
      id: 0,
      url: "/images/products/pd1.svg",
    },
    {
      id: 1,
      url: "/images/products/pd2.svg",
    },
    {
      id: 2,
      url: "/images/products/pd3.svg",
    },
    {
      id: 3,
      url: "/images/products/pd4.svg",
    },
  ];
  const [selectedColor, setSelectedColor] = useState();

  const productCountDecrement = () => {
    if (selectedCount <= 1) return;
    setSelectedCount((prev) => prev - 1);
  };
  const productCountIncrement = () => setSelectedCount((prev) => prev + 1);
  useEffect(() => {
    window.scrollTo(0, 0);
    async function getProductDetail() {
      await apiFunction(`productDetail/${id}`, { type: "get" }).then((res) => {
        if (res?.data?.data) {
          setData(res?.data?.data);
          setSelectedImg(res?.data?.data?.cover_photo);
          setSelectedColor(res?.data?.data?.colors[0]?.name);
        } else {
          return window.location.replace(PathConstants.HOME);
        }
      });
    }
    getProductDetail();
  }, [id]);
  if (!data) {
    return <Loading />;
  }
  return (
    <>
      <div className="prod-area">
        <div className="product-grid">
          <div className="product-carousel">
            <Carousel autoplay draggable slidesToShow={1} dots>
              {imgList.map((img) => (
                <img
                  className="img-car"
                  key={img.id}
                  src={img.url}
                  alt="product-detail"
                  onClick={() => setSelectedImg(img.url)}
                />
              ))}
            </Carousel>
          </div>
          <div className="product-images">
            {imgList.map((img) => (
              <img
                key={img.id}
                src={img.url}
                alt="product-detail"
                onClick={() => setSelectedImg(img.url)}
              />
            ))}
          </div>
          <div className="product-image">
            {data?.cover_photo && (
              <img src={selectedImg} alt="product-detail" />
            )}
          </div>
          <div className="product-detail">
            <h1 className="font-24">{data?.name}</h1>
            <p className="font-24">${data?.price}</p>
            <p className="font-14">{data?.description}</p>
            <div className="display-flex">
              <p className="font-20">{t("colors")}:</p>
              <span className="display-flex">
                {data?.colors?.map((color) => (
                  <div
                    className={`${
                      color.name === selectedColor ? "selected-color" : ""
                    }`}
                  >
                    <div
                      onClick={() => setSelectedColor(color.name)}
                      className={`${
                        color.name === selectedColor
                          ? "color-type-small"
                          : "color-type"
                      }`}
                      style={{ backgroundColor: color.name }}
                    ></div>
                  </div>
                ))}
              </span>
            </div>
            <div className="event-area">
              <div className="count-area">
                <span className="box" onClick={productCountDecrement}>
                  -
                </span>
                <span className="box count-content">{selectedCount}</span>
                <span
                  onClick={productCountIncrement}
                  className="box"
                  style={{ backgroundColor: "#DB4444", color: "white" }}
                >
                  +
                </span>
              </div>
              <Button title={t("buy")} height={44} width={65} />
              <span className="box">
                <Heart width={25} height={25} />
              </span>
            </div>
            <div className="info-area">
              <div className="display-flex">
                <Truck width={50} height={50} />
                <div className="cargo-return-area">
                  <p className="font-16">Free Delivery</p>
                  <p className="font-12">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <Divider style={{ margin: "0px", padding: "0px" }} />

              <div className="display-flex">
                <Loop width={50} height={50} />
                <div className="cargo-return-area">
                  <p className="font-16">Return Delivery</p>
                  <p className="font-12">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GeneralTitle title="Discount Products" />
        <div className="related-area">
          {discountProduct?.slice(0, 4).map((dc) => (
            <ShoppingCard
              key={dc._id}
              fullObject={dc}
              id={dc._id}
              name={dc.name}
              cover_photo={dc.cover_photo}
              price={dc.price}
              discount={dc.discount}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductDetailPage;
