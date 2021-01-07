import React from "react";
import { useDispatch } from "react-redux";
import getImageFromJson from "../helper-functions/getImageFromJson";

import { addToBasket } from "../../actions/cartActions";

const StoreList = ({ items }) => {
  const dispatch = useDispatch();

  return items.map((item) => {
    return (
      <div className="six wide column">
        <div className="ui card" key={item.id}>
          <img
            className="image"
            src={getImageFromJson(item.image)}
            alt={item.title}
          />
          <div className="content">
            <div className="center aligned header">{item.title}</div>
            <div className="description">
              <div className="description">{item.type}</div>
              <div className="description">{item.origin}</div>
            </div>
          </div>
          <div className="left aligned extra content">{item.price}</div>
          <button
            onClick={() => dispatch(addToBasket(item.id))}
            className="orange ui button"
          >
            Add To Basket
          </button>
        </div>
      </div>
    );
  });
};

export default StoreList;
