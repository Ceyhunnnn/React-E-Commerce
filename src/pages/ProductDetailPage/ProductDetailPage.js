import React, { useState } from "react";
import "./ProductDetailPage.css";
import Button from "components/Button";
import { Heart, Loop, Truck } from "components/Icons/Icons";
import { useTranslation } from "react-i18next";
import { Divider } from "antd";
import GeneralTitle from "components/GeneralTitle";
import ShoppingCard from "components/ShoppingCard";
function ProductDetailPage() {
  const { t } = useTranslation();
  const [selectedImg, setSelectedImg] = useState("/images/products/pd1.svg");
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
  const colorList = [
    {
      id: 0,
      color: "blue",
    },
    {
      id: 1,
      color: "red",
    },
    {
      id: 2,
      color: "green",
    },
  ];
  const [selectedColor, setSelectedColor] = useState(colorList[0].color);

  const productCountDecrement = () => {
    if (selectedCount <= 1) return;
    setSelectedCount((prev) => prev - 1);
  };
  const productCountIncrement = () => {
    setSelectedCount((prev) => prev + 1);
  };
  return (
    <>
      <div className="sized-box">
        <div className="product-grid">
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
            <img src={selectedImg} alt="product-detail" />
          </div>
          <div className="product-detail">
            <h1 className="font-24">Havic HV G-92 Gamepad</h1>
            <p className="font-24">$192.00</p>
            <p className="font-14">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
            <div className="display-flex">
              <p className="font-20">{t("colors")}:</p>
              <span className="display-flex">
                {colorList.map((color) => (
                  <div
                    className={`${
                      color.color === selectedColor ? "selected-color" : ""
                    }`}
                  >
                    <div
                      onClick={() => setSelectedColor(color.color)}
                      className={`${
                        color.color === selectedColor
                          ? "color-type-small"
                          : "color-type"
                      }`}
                      style={{ backgroundColor: color.color }}
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
        <GeneralTitle title="Related Item" />
        <div className="related-area">
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />
        </div>
      </div>
    </>
  );
}

export default ProductDetailPage;
