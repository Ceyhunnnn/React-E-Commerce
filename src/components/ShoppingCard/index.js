import React from "react";
import "./index.css";
import { Heart } from "components/Icons/Icons";
import { Rate, notification } from "antd";
import { Link } from "react-router-dom";
import PathConstants from "PathConstants";
import StorageService from "services/StorageService";
import { basketSizeChange } from "modules/basketCount";

function ShoppingCard({ name, cover_photo, price, discount, id, fullObject }) {
  const saveToLocalStorage = () => {
    basketSizeChange(1);
    const initialList = JSON.parse(StorageService.getStorage("basket"));
    if (initialList?.length <= 0) {
      StorageService.setStorage("basket", JSON.stringify([fullObject]));
      addedToCard();
    } else {
      if (
        initialList.filter((prod) => prod._id === fullObject._id)?.length <= 0
      ) {
        const tempList = [...initialList];
        tempList.push(fullObject);
        StorageService.setStorage("basket", JSON.stringify(tempList));
        addedToCard();
      } else {
        alreadyAdded();
      }
    }
  };
  const alreadyAdded = () => {
    notification.info({
      message: "Adding Products to Cart",
      description: "The product is already added to your cart",
    });
  };
  const addedToCard = () => {
    notification.success({
      message: "Adding Products to Cart",
      description: "The product has been successfully added to your cart",
    });
  };
  return (
    <div className="shop-card">
      <div className="shop-photo">
        <Link to={`/${PathConstants.PRODUCT_DETAIL}/${id}`}>
          <img
            className="cover-photo-size"
            src={cover_photo}
            alt="ShoppingPhotos"
          />
        </Link>
        <div className="shop-event">
          {discount && <div className="shop-discount">%{discount}</div>}
          <div className="shop-heart">
            <Heart width={20} height={20} />
          </div>
        </div>
        <div className="add-card" onClick={saveToLocalStorage}>
          Add to Cart
        </div>
      </div>
      <div className="shop-info">
        <h5>{name}</h5>
        <p>${price}</p>
        <div className="display-flex">
          <Rate defaultValue={3} />
          <p style={{ color: "#a0a0a0" }}>(80)</p>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCard;
