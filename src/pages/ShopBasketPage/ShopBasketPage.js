/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./ShopBasketPage.css";
import { Input, InputNumber, notification } from "antd";
import { useTranslation } from "react-i18next";
import Button from "components/Button";
import { Trash } from "components/Icons/Icons";
import StorageService from "services/StorageService";
import { basketSizeChange } from "modules/basketCount";
import { useSelector } from "react-redux";
import Loading from "components/Loading/Loading";

function ShopBasketPage() {
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user.value);
  const basket = useSelector((state) => state.basket.value);
  const [subTotal, setSubTotal] = useState(1);
  const [basketList, setBasketList] = useState([]);
  const basketLocalStorage = JSON.parse(StorageService.getStorage("basket"));
  const { t } = useTranslation();
  const deleteProduct = (bas) => {
    const updateProductList = basketList.filter(
      (items) => items._id !== bas._id
    );
    basketSizeChange(-1);
    setBasketList(updateProductList);
    StorageService.setStorage("basket", JSON.stringify(updateProductList));
  };
  const calculateProductSubTotal = (bas, value) => {
    const objIndex = basketList.findIndex((obj) => obj._id === bas._id);
    basketList[objIndex].quantity = bas.price * value;
    const data = [...basketList];
    setBasketList(data);
    calculateSubTotal();
  };
  const calculateSubTotal = () => {
    const total = basketList
      .map((product) => {
        return product.quantity;
      })
      .reduce((a, b) => a + b, 0);
    setSubTotal(total);
  };
  const checkToUser = () => {
    if (!user) {
      notification.error({
        message: "User Not Found",
        description: "You must log in to purchase",
      });
    } else {
      createOrder();
    }
  };
  const createOrder = () => {};
  useEffect(() => {
    if (basketList?.length > 0) {
      calculateSubTotal();
    }
  }, [basketList]);

  useEffect(() => {
    if (basket?.length > 0) {
      setBasketList(basket);
      setLoading(false);
    }
  }, [basket]);
  useEffect(() => {
    if (basketLocalStorage.length > 0) {
      setBasketList(basketLocalStorage);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {basketList?.length > 0 && (
        <>
          <div className="basket-area">
            <div className="basket-grid" id="divToPrint">
              <p>{t("product")}</p>
              <p>{t("price")}</p>
              <p>{t("quantity")}</p>
              <p>{t("subTotal")}</p>
            </div>
            {basketList?.map((bas) => (
              <div className="basket-grid" key={bas._id}>
                <div className="display-flex ">
                  <div className="img-rel">
                    <img
                      src={bas.cover_photo}
                      alt="ProdcutImage"
                      width={50}
                      height={50}
                    />
                    <Trash
                      className="garbage"
                      onClick={() => deleteProduct(bas)}
                    />
                  </div>
                  <p className="product-name">{bas.name}</p>
                </div>
                <p>{bas.price}</p>
                <InputNumber
                  min={1}
                  max={15}
                  defaultValue={bas.quantity / bas.price}
                  onChange={(value) => {
                    calculateProductSubTotal(bas, value);
                  }}
                />
                <p>{bas.quantity}</p>
              </div>
            ))}
          </div>
          <div className="sub-area">
            <div className="sub-content">
              <div className="copun-area">
                <Input
                  type="text"
                  style={{ width: "140px", height: "40px" }}
                  placeholder={t("couponCode")}
                />
                <Button title={t("applyCoupon")} height="40px" width="100px" />
              </div>
              <div className="cart-total">
                <p style={{ padding: "10px" }}>{t("cartTotal")}</p>
                <div className="cart-text">
                  <p>{t("subTotal")}:</p>
                  <p>${subTotal}</p>
                </div>
                <hr></hr>
                <div className="cart-text">
                  <p>{t("shipping")}:</p>
                  <p>{t("free")}</p>
                </div>
                <hr></hr>
                <div className="cart-text">
                  <p>{t("total")}:</p>
                  <p>${subTotal}</p>
                </div>
                <div className="flex-area">
                  <Button
                    title={t("buy")}
                    onClick={checkToUser}
                    height="40px"
                    width="150px"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {basketList?.length <= 0 && (
        <div className="no-prodcut">
          <p>{t("notFoundProduct")}</p>
          <img src="/images/products/emptyProduct.svg" alt="EmptyProduct" />
        </div>
      )}
    </>
  );
}

export default ShopBasketPage;
