/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./ShopBasketPage.css";
import { Input, InputNumber } from "antd";
import { useTranslation } from "react-i18next";
import Button from "components/Button";
import { Trash } from "components/Icons/Icons";
import StorageService from "services/StorageService";
import { basketSizeChange } from "modules/basketCount";

function ShopBasketPage() {
  const [subTotal, setSubTotal] = useState(1);
  const [basketList, setBasketList] = useState(
    JSON.parse(StorageService.getStorage("basket"))
  );
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
  useEffect(() => {
    if (basketList) {
      calculateSubTotal();
    }
  }, [basketList]);

  return (
    <>
      {basketList?.length > 0 && (
        <>
          <div className="basket-area">
            <div className="basket-grid">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
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
                <p style={{ padding: "10px" }}>Cart Total</p>
                <div className="cart-text">
                  <p>SubTotal:</p>
                  <p>${subTotal}</p>
                </div>
                <hr></hr>
                <div className="cart-text">
                  <p>Shipping:</p>
                  <p>Free</p>
                </div>
                <hr></hr>
                <div className="cart-text">
                  <p>Total:</p>
                  <p>${subTotal}</p>
                </div>
                <div className="flex-area">
                  <Button title={t("process")} height="40px" width="150px" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {basketList?.length <= 0 && (
        <div className="no-prodcut">
          <p>Sepetinizde henüz ürün bulunmamaktadır.</p>
          <img src="/images/products/emptyProduct.svg" alt="EmptyProduct" />
        </div>
      )}
    </>
  );
}

export default ShopBasketPage;
