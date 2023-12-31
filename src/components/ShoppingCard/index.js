import React from "react";
import "./index.css";
import { Heart } from "components/Icons/Icons";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import PathConstants from "PathConstants";
import { saveProductLocalstorage } from "modules/saveProductLocalstorage";
import { useSelector } from "react-redux";
import { saveProductDatabase } from "modules/saveProductDatabase";

function ShoppingCard({ name, cover_photo, price, discount, id, fullObject }) {
  const user = useSelector((state) => state.user.value);
  const addBasketItem = async () => {
    if (user) {
      saveProductDatabase(fullObject);
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
