import React from "react";
import "./index.css";
import { Heart } from "components/Icons/Icons";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import PathConstants from "PathConstants";
import { saveProductLocalstorage } from "modules/saveProductLocalstorage";
import { useSelector } from "react-redux";
import { addedToCard, alreadyAdded } from "modules/notifications";
import apiFunction from "services/Api";
import { getUserBasketList } from "modules/basketItems";

function ShoppingCard({ name, cover_photo, price, discount, id, fullObject }) {
  const user = useSelector((state) => state.user.value);
  const basket = useSelector((state) => state.basket.value);
  const addBasketItem = async () => {
    if (user) {
      const isItemIncludes = basket.filter(
        (item) => item._id === fullObject._id
      );
      if (isItemIncludes.length === 0) {
        const body = {
          userId: user._id,
          item: fullObject,
        };
        await apiFunction("addItemToBasket", { body, type: "post" }).then(
          (res) => {
            if (res.status === 200) {
              addedToCard();
              getUserBasketList(user._id);
            }
          }
        );
      } else {
        alreadyAdded();
      }
    } else {
      saveProductLocalstorage(fullObject);
    }
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
        <div className="add-card" onClick={addBasketItem}>
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
