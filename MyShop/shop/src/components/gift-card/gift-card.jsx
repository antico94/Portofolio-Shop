import React from "react";
import Image from "./../../assets/images/gift-card/gift.jpg";
import "./gift-card.css"

const GiftCard = ({price}) => {
  return (
    <div className="app-card">
      <span>
        <img src={Image} loading="lazy" />
      </span>
      <div className="app-card__subtext">{"Surprise your loved ones with this voucher of " + price + " Lei"}</div>
      <div className="app-card-lower">
        <span>{price} Lei</span>
        <div className="app-card-buttons">
          <button className="content-button status-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
