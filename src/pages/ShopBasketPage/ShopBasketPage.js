import React from "react";
import "./ShopBasketPage.css";
import Container from "components/Container";
import { Input, InputNumber } from "antd";
import { useTranslation } from "react-i18next";
import Button from "components/Button";
import { Trash } from "components/Icons/Icons";

function ShopBasketPage() {
  const { t } = useTranslation();
  const basketList = [
    {
      id: 0,
      product: "LCD monitor",
      price: "$500",
      quantity: 1,
      subTotal: "650",
      img: "/images/monitor.svg",
    },
    {
      id: 1,
      product: "H1 Gamepad",
      price: "$500",
      quantity: 1,
      subTotal: "650",
      img: "/images/gamepad.svg",
    },
  ];
  return (
    <Container>
      <div className="basket-area">
        <div className="basket-grid">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
        {basketList.map((bas) => (
          <div className="basket-grid" key={bas.id}>
            <div className="display-flex ">
              <div className="img-rel">
                <img src={bas.img} alt="ProdcutImage" width={50} height={50} />
                <Trash className="garbage" />
              </div>
              <p>{bas.product}</p>
            </div>
            <p>{bas.price}</p>
            <InputNumber defaultValue={bas.quantity} />
            <p>{bas.subTotal}</p>
          </div>
        ))}
      </div>
      <div className="sub-area">
        <div className="sub-content">
          <div className="display-flex">
            <Input
              type="text"
              style={{ width: "140px", height: "40px" }}
              placeholder={t("couponCode")}
            />
            <Button title={t("applyCoupon")} height="40px" width="100px" />
          </div>
          <div className="cart-total">
            <p style={{ padding: "10px" }}>Cart Total</p>
            <div className="cart-text">
              <p>SubTotal:</p>
              <p>$123</p>
            </div>
            <hr></hr>
            <div className="cart-text">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <hr></hr>
            <div className="cart-text">
              <p>Total:</p>
              <p>$1233</p>
            </div>
            <div className="flex-area">
              <Button title={t("process")} height="40px" width="150px" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ShopBasketPage;
