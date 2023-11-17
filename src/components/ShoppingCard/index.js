import React from "react";
import "./index.css";
import { Heart } from "components/Icons";
import { Rate } from "antd";

function ShoppingCard() {
  return (
    <div className="shop-card">
      <div className="shop-photo">
        <img src="/images/play.svg" alt="ShoppingPhotos" />
        <div className="shop-event">
          <div className="shop-discount">-40%</div>
          <div className="shop-heart">
            <Heart width={20} height={20} />
          </div>
        </div>
        <div className="add-card">Add to Cart</div>
      </div>

      <div className="shop-info">
        <h5>HAVIT HV-G92 Gamepad</h5>
        <p>
          $120 <sup>$160</sup>
        </p>
        <div className="display-flex">
          <Rate defaultValue={3} />
          <p style={{ color: "#a0a0a0" }}>(80)</p>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCard;