import React from "react";
import { useSelector } from "react-redux";

import "./Basket.css";
import BasketList from "./BasketList";

const Basket = () => {
  const items = useSelector((state) => state.itemsInBasket);
  const total = useSelector((state) => state.total);
  const formatPrice = (totalPrice) => {
    const formatTotalPrice = {
      style: "currency",
      currency: "GBP",
    };
    return totalPrice.toLocaleString("en-GB", formatTotalPrice);
  };

  if (items.length) {
    return (
      <div className="ui container basket__padding">
        <div className="basket__container">
          <BasketList items={items} />
        </div>
        <div className="total__container">
          <div className="total__price">Total to pay: {formatPrice(total)}</div>

          <button className="ui orange button total__btn">
            Proceed to checkout
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="ui container">
      <div className="ui center aligned header">You basket is empty</div>
    </div>
  );
};

export default Basket;
