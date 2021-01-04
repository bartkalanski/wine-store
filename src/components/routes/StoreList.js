import React from "react";
import { useDispatch } from "react-redux";
import getImageFromJson from "../helper-functions/getImageFromJson";

import { addToBasket } from "../../actions/cartActions";

const StoreList = ({ items }) => {
  const dispatch = useDispatch();

  return items.map((item) => {
    return (
      <div class="six wide column">
        <div class="ui card">
          <img
            class="image"
            src={getImageFromJson(item.image)}
            alt={item.title}
          />
          <div class="content">
            <div class="center aligned header">{item.title}</div>
            <div className="description">
              <div class="description">{item.type}</div>
              <div class="description">{item.origin}</div>
            </div>
          </div>
          <div class="left aligned extra content">{item.price}</div>
          <button
            onClick={() => dispatch(addToBasket(item.id))}
            class="orange ui button"
          >
            Add To Basket
          </button>
        </div>
      </div>
    );
  });
};

export default StoreList;
